const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const connection = require('./db'); // Importa a conexão com o banco de dados

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// As rotas para exibir as páginas HTML
app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Rota para registrar um novo usuário
app.post('/register', (req, res) => {
  const { username, password, email, telefone } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).send('Internal server error.');
    }
    const sql = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';
    connection.query(sql, [username, hash, email, telefone], (err, result) => {
      if (err) {
        console.error('Error inserting user into database:', err);
        return res.status(500).send('Internal server error.');
      }
      res.send('User registered successfully.');
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
