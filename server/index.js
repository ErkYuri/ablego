const express = require('express');
const app = express();
const pool = require('./database');

const PORT = 3000; // porta do sistema

// criando rota teste
app.get('/teste-banco', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT NOW()');
        res.send(`Conexão bem sucedida! Hora no servidor: ${resultado.rows[0].now}`);
    } catch (erro) {
        console.error(erro);
        res.status(500).send('Erro ao tentar conectar ao banco.');
    }
});

// conectando
app.listen(PORT, () => {
    console.log(`Servidor conectado! Porta: ${PORT}`);
});
