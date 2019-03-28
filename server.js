const express = require('express');
require('dotenv').config();

const postRouter = require('./data/posts/post-router.js')
const port = process.env.PORT || 4000;
const server = express();

server.use(express.json());

server.use('/api/posts', postRouter);

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });

