const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const connection = require('./db'); // Importa a conexão com o banco de dados

const saltRounds = 10;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Verifica se o diretório 'uploads' existe e o cria se necessário
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuração do Multer para upload de arquivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir); // Define a pasta onde os arquivos serão salvos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Define o nome do arquivo
  }
});

const upload = multer({ storage: storage });

// Rotas para exibir as páginas HTML
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Rota para registrar um novo usuário
app.post('/register', upload.single('foto_perfil'), (req, res) => {
  const { username, password, email, telefone, data_nascimento } = req.body;
  const fotoPerfil = req.file ? req.file.filename : null;

  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).send('Internal server error.');
    }

    // Insere o usuário na tabela `users`
    const sqlInsertUser = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';
    connection.query(sqlInsertUser, [username, hash, email, telefone], (err, result) => {
      if (err) {
        console.error('Error inserting user into database:', err);
        return res.status(500).send('Internal server error.');
      }

      const userId = result.insertId; // Obtém o ID do usuário recém-criado

      // Insere os dados adicionais na tabela `profiles`
      const sqlInsertProfile = 'INSERT INTO profiles (user_id, data_nascimento, foto_perfil) VALUES (?, ?, ?)';
      connection.query(sqlInsertProfile, [userId, data_nascimento, fotoPerfil], (err) => {
        if (err) {
          console.error('Error inserting profile into database:', err);
          return res.status(500).send('Internal server error.');
        }
        res.send('User registered successfully.');
      });
    });
  });
});

// Rota para login de usuários
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  connection.query(sql, [username], (err, results) => {
    if (err) {
      console.error('Error querying database:', err);
      return res.status(500).send('Internal server error.');
    }
    if (results.length === 0) return res.send('User not found.');
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (err) {
        console.error('Error comparing password:', err);
        return res.status(500).send('Internal server error.');
      }
      if (result) res.send('Login successful.');
      else res.send('Incorrect password.');
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
