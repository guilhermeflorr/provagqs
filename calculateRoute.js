function calculateDistance(endereco1, endereco2) {
    return Math.sqrt(
      Math.pow(endereco2.latitude - endereco1.latitude, 2) +
      Math.pow(endereco2.longitude - endereco1.longitude, 2)
    );
  }
  
  function calculateRoute(pedidos, rota) {
    let melhorRota = null;
    let menorDistancia = Infinity;
  
    rotas.forEach(rota => {
      let distanciaTotal = 0;
  
      pedidos.forEach(pedido => {
        distanciaTotal += calculateDistance(pedido.endereco, rota);
      });
  
      if (distanciaTotal < menorDistancia) {
        menorDistancia = distanciaTotal;
        melhorRota = rota;
      }
    });
  
    return melhorRota;
  }
  
  module.exports = calculateRoute;
  