const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const connection = require('./db');

const app = express();
app.use(bodyParser.json());

// Rota de Registro
app.post('/register', (req, res) => {
    const { username, password, email } = req.body;

    // Hash da senha
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        // Inserção no banco de dados
        connection.query(
            'INSERT INTO users (username, password, email, created_at) VALUES (?, ?, ?, NOW())',
            [username, hash, email],
            (error, results) => {
                if (error) throw error;
                res.send('Usuário registrado com sucesso!');
            }
        );
    });
});

// Rota de Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Verifica o usuário no banco de dados
    connection.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (error, results) => {
            if (error) throw error;

            if (results.length > 0) {
                // Compara a senha
                bcrypt.compare(password, results[0].password, (err, result) => {
                    if (result) {
                        res.send('Login bem-sucedido!');
                    } else {
                        res.send('Senha incorreta!');
                    }
                });
            } else {
                res.send('Usuário não encontrado!');
            }
        }
    );
});

// Inicializa o servidor
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
