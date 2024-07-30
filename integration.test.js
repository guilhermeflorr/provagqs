const request = require('supertest');
const app = require('../src/app');

describe('API Integration Tests', () => {
  it('should return the list of pedidos', async () => {
    const response = await request(app).get('/pedidos');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new pedido', async () => {
    const newPedido = {
      endereco: {
        latitude: 1.234,
        longitude: 5.678,
      },
      produto: 'Produto A',
      quantidade: 10
    };
    const response = await request(app).post('/pedidos').send(newPedido);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(newPedido);
  });

  it('should return the list of rotas', async () => {
    const response = await request(app).get('/rotas');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should create a new rota', async () => {
    const newRota = {
      latitude: 1.234,
      longitude: 5.678,
    };
    const response = await request(app).post('/rotas').send(newRota);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(newRota);
  });

  it('should return the best route', async () => {
    // Adicione um pedido e uma rota para testar a melhor rota
    await request(app).post('/pedidos').send({
      endereco: {
        latitude: 1.234,
        longitude: 5.678,
      },
      produto: 'Produto A',
      quantidade: 10
    });

    await request(app).post('/rotas').send({
      latitude: 1.234,
      longitude: 5.678,
    });

    const response = await request(app).get('/melhor-rota/0');
    expect(response.status).toBe(200);
    expect(response.body).toBeDefined();
  });
});
