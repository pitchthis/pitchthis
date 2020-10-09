const db = require('../models/model');

module.exports = {
  async createGame(req, res, next) {
    console.log('in create game');
    console.log('req body', req.body);
    const game_title = Object.keys(req.body)[0];
    const createGameQuery = `INSERT INTO games (game_title, user_id) VALUES ($1, $2) RETURNING *`;
    const values = [game_title, 1];
    try {
      const result = await db.query(createGameQuery, values);
      res.locals.game_id = result.rows[0].id;
      return next();
    } catch (err) {
      if (err) return next(err);
    }
  },

  async editGame(req, res, next) {
    const { id } = req.body;
    const editGameQuery = `UPDATE games SET game_title=$1 WHERE id=$1`;
    const values = [id];
    try {
      await db.query(editGameQuery, values);
      return next();
    } catch (err) {
      if (err) return next(err);
    }
  },

  async getGames(req, res, next) {
    const { user } = req.cookies;
    const gameQuery = `SELECT * FROM games`;
    try {
      const result = await db.query(gameQuery);
      res.locals.games = result.rows;
      return next();
    } catch (err) {
      if (err) return next(err);
    }
  },

  async getTopics(req, res, next) {
    const { id } = req.params;
    const topicQuery = `SELECT * FROM topics WHERE game_id=${id}`;
    try {
      const result = await db.query(topicQuery);
      res.locals.topics = result.rows;
      return next();
    } catch (err) {
      if (err) return next(err);
    }
  },

  async createTopics(req, res, next) {
    console.log('in createTopics ');
    const game_title = Object.keys(req.body)[0];
    const topicName = Object.keys(req.body[game_title]);

    const createTopicQuery = `INSERT INTO topics (game_id, pros_cons, topic, description) VALUES($1, $2, $3, $4)`;
    const values = [];

    for (const topic in req.body[game_title]) {
      for (const procon in req.body[game_title][topic]) {
        for (const description in req.body[game_title][topic][procon]) {
          values.push([
            res.locals.game_id,
            procon,
            topic,
            req.body[game_title][topic][procon][description],
          ]);
        }
      }
    }
    values.forEach(async (value) => {
      try {
        await db.query(createTopicQuery, value);
      } catch (err) {
        // if (err) return next(err);
      }
    });
    return next();
  },
};

/* [{
  topic: React,
  pros_cons: pro,
  text: "lots of resources",
  game_id: 1
}] */
