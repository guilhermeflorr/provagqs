const rotas = [];

exports.getRotas = (req, res) => {
  res.status(200).json(rotas);
};

exports.createRota = (req, res) => {
  const rota = req.body;
  rotas.push(rota);
  res.status(201).json(rota);
};
