const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gamesRoute = require("./routes/games");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dublet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/games", gamesRoute);

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
