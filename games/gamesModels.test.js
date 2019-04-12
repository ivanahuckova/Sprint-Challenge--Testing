const db = require('../data/dbConfig');
const Games = require('./gamesModels');

describe('games models', () => {
  beforeEach(async () => {
    await db('games').truncate();
  });
  afterEach(async () => {
    await db('games').truncate();
  });

  describe('insert functionality', () => {
    it('insert new game in the database', async () => {
      const newGame = await Games.insert({ title: 'Us', genre: 'horror', releaseYear: 2019 });
      expect(newGame.title).toBe('Us');
    });
  });
  describe('get all functionality', () => {
    it('shows all hames in the database', async () => {
      const newGame1 = await Games.insert({ title: 'Us', genre: 'horror', releaseYear: 2019 });
      const newGame2 = await Games.insert({ title: 'Get Out', genre: 'horror', releaseYear: 2018 });
      const allGames = await db('games');
      expect(allGames).toHaveLength(2);
    });
  });
});
