const pedidos = [];

exports.getPedidos = (req, res) => {
  res.status(200).json(pedidos);
};

exports.createPedido = (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.status(201).json(pedido);
};
