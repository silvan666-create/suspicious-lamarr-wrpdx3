const express = require('express');
const router = express.Router();
const Game = require('../models/Game');

// Отримати всі ігри
router.get('/', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Отримати гру за ID
router.get('/:id', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Додати гру (для admin)
router.post('/', async (req, res) => {
  try {
    const newGame = new Game(req.body);
    await newGame.save();
    res.json(newGame);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Додати відгук
router.post('/:id/review', async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    game.reviews.push(req.body);
    await game.save();
    res.json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;