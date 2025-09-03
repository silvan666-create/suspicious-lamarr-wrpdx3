const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  players: Number,
  age: String,
  difficulty: String,
  rating: { type: Number, default: 0 },
  reviews: [{ username: String, comment: String }],
});

module.exports = mongoose.model("Game", gameSchema);
