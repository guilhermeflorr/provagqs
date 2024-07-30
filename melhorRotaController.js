const rotas = require('./rotasController').rotas;
const pedidos = require('./pedidosController').pedidos;
const calculateRoute = require('../utils/calculateRoute');

exports.getMelhorRota = (req, res) => {
  const rotaId = req.params.id;
  const rota = rotas[rotaId];
  if (!rota) {
    return res.status(404).json({ error: 'Rota não encontrada' });
  }

  const melhorRota = calculateRoute(pedidos, rota);
  res.status(200).json(melhorRota);
};
