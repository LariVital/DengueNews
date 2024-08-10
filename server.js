const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário do MySQL
  password: 'OCaminhoÉOFimMaisQueChegar.', // Substitua pela sua senha do MySQL
  database: 'dengue_news'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/register', (req, res) => {
  const { username, password, email, telefone } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    const sql = 'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)';
    connection.query(sql, [username, hash, email, telefone], (err, result) => {
      if (err) throw err;
      res.send('User registered successfully.');
    });
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const sql = 'SELECT * FROM users WHERE username = ?';
  connection.query(sql, [username], (err, results) => {
    if (err) throw err;
    if (results.length === 0) return res.send('User not found.');
    bcrypt.compare(password, results[0].password, (err, result) => {
      if (err) throw err;
      if (result) res.send('Login successful.');
      else res.send('Incorrect password.');
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
