const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OCaminhoÉOFimMaisQueChegar.',
    database: 'meu_banco'
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados');
    }
});

app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

const bcrypt = require('bcrypt');

app.post('/register', (req, res) => {
    const { username, password, email, telefone } = req.body;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;

        db.query(
            'INSERT INTO users (username, password, email, telefone) VALUES (?, ?, ?, ?)',
            [username, hash, email, telefone],
            (err, result) => {
                if (err) throw err;
                res.send('Usuário registrado com sucesso!');
            }
        );
    });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE username = ?',
        [username],
        (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                const user = results[0];

                bcrypt.compare(password, user.password, (err, match) => {
                    if (err) throw err;

                    if (match) {
                        res.send('Login bem-sucedido!');
                    } else {
                        res.send('Senha incorreta.');
                    }
                });
            } else {
                res.send('Usuário não encontrado.');
            }
        }
    );
});

app.use(express.static('cadUsuarios'));
app.use(express.static('public')); // Se houver outros arquivos estáticos em 'public'
app.use(express.static(__dirname)); // Serve arquivos estáticos da raiz do projeto
