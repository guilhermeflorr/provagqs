# Projeto API de Pedidos e Rotas

Este projeto é uma API construída com Node.js e Express para gerenciar pedidos e rotas de entrega. A API inclui funcionalidades para criar e listar pedidos e rotas, bem como para verificar a melhor rota de entrega com base nos pedidos cadastrados.

## Estrutura do Projeto

provaqgs
├── node_modules
├── src
│ ├── routes
│ │ ├── pedidos.js
│ │ ├── rotas.js
│ │ └── melhorRota.js
│ ├── controllers
│ │ ├── pedidosController.js
│ │ ├── rotasController.js
│ │ └── melhorRotaController.js
│ ├── utils
│ │ └── calculateRoute.js
│ ├── app.js
│ └── server.js
├── tests
│ └── integration.test.js
├── package.json
└── README.md

## Instalação

1. Clone o repositório:

   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd provaqgs
 ## Instale as dependências: 

npm install
 ## Para iniciar o servidor, execute:
 npm start

## Pedidos
GET /pedidos: Retorna a lista de pedidos.
POST /pedidos: Cria um novo pedido.
## Rotas
GET /rotas: Retorna a lista de rotas.
POST /rotas: Cria uma nova rota.
## Melhor rota 
GET /melhor-rota/
: Verifica a melhor rota de entrega para os pedidos baseando-se na rota cadastrada especificada pelo ID.
## estrutura do pedido 
{
  "endereco": {
    "latitude": "number",
    "longitude": "number"
  },
  "produto": "string",
  "quantidade": "number"
}

## estrutura da rota
{
  "latitude": "number",
  "longitude": "number"
}

## testes
npm test

