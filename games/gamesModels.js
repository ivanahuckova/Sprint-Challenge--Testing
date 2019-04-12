const db = require('../data/dbConfig');

async function insert(game) {
  const [id] = await db('games').insert({ title: game.title, genre: game.genre, releaseYear: game.releaseYear });
  return db('games')
    .where({ id })
    .first();
}

async function getAll() {
  return await db('games');
}

module.exports = {
  insert,
  getAll
};
