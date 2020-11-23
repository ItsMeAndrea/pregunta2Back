const express = require("express");

const { createGame, getGame } = require("../controllers/leaderboardController");

const router = express.Router();

router.post("/multiplayer/addGame", createGame);
router.get("/multiplayer/getGame", getGame);

module.exports = router;
