const express = require('express');
const bodyParser = require('body-parser');
const pedidosRoutes = require('./routes/pedidos');
const rotasRoutes = require('./routes/rotas');
const melhorRotaRoutes = require('./routes/melhorRota');

const app = express();

app.use(bodyParser.json());
app.use('/pedidos', pedidosRoutes);
app.use('/rotas', rotasRoutes);
app.use('/melhor-rota', melhorRotaRoutes);

module.exports = app;
