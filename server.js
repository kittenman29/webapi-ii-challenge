const express = require('express');

// const Hubs = require('./hubs/hubs-model.js');
// const hubsRouter = require('./hubs/hubs-router.js')

const server = express();

server.use(express.json());

// server.get('/', (req, res) => {
//   res.send(`
//     <h2>Lambda Hubs API</h>
//     <p>Welcome to the Lambda Hubs API</p>
//   `);
// });

// server.use('/api/hubs', hubsRouter);

module.exports = server;