const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('../data/dbConfig');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json('Hello');
});

module.exports = server;
