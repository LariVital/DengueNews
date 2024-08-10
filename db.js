const mysql = require('mysql2');

// Criação da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Substitua pelo seu usuário do MySQL
  password: 'Qwerty000', // Substitua pela sua senha do MySQL
  database: 'dengue_news'
});

// Conecte-se ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    throw err;
  }
  console.log('Connected to the database.');
});

module.exports = connection;
