// app.js
const express = require('express');
const app = express();
const port = 3000;

// Importando as rotas de users
const userRoutes = require('./routes/user');
const carRoutes = require('./routes/car');

// Middleware para parsear JSON
app.use(express.json());

// Usando as rotas de users
app.use('/users', userRoutes);
app.use('/cars', carRoutes);

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
