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
    it('insert new game in the database', async () => {
      await Games.insert({ title: 'Us', genre: 'horror', releaseYear: 2019 });
      await Games.insert({ title: 'Get Out', genre: 'horror', releaseYear: 2018 });
      await Games.insert({ title: 'Captian Marvel', genre: 'action', releaseYear: 2019 });
      const allGames = await db('games');
      expect(allGames).toHaveLength(3);
    });
  });
  describe('get all functionality', () => {
    it('shows all games in the database', async () => {
      await Games.insert({ title: 'Us', genre: 'horror', releaseYear: 2019 });
      await Games.insert({ title: 'Get Out', genre: 'horror', releaseYear: 2018 });
      const allGames = await db('games');
      expect(allGames).toHaveLength(2);
    });
    it('shows empty array when no game added', async () => {
      const allGames = await db('games');
      expect(typeof allGames).toBe('object');
    });
  });
});
