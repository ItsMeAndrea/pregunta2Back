const express = require("express");

const { createGame, getGame } = require("../controllers/multiplayerController");

const router = express.Router();

router.post("/multiplayer/addGame", createGame);
router.get("/multiplayer/getGame", getGame);

module.exports = router;
