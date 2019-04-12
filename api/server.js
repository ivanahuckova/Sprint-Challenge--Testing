const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const Games = require('../games/gamesModels');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/games', async (req, res) => {
  const allGames = await Games.getAll();
  res.status(200).json(allGames);
});

server.post('/games', async (req, res) => {
  try {
    const { title, genre, releaseYear } = req.body;
    if (title && genre) {
      const newGame = await Games.insert({ title, genre, releaseYear });
      res.status(201).json(newGame);
    } else {
      res.status(422).json({ message: 'Incomplete information' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = server;
