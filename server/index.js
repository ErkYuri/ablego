const express = require('express');
const app = express();
const pool = require('./database');
const rotasLocais = require('./routes/locais'); // O "require" deve vir primeiro

const PORT = 3000;

app.use(express.json());
app.use('/api/locais', rotasLocais); // O "use" vem depois que a rota já foi definida

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
