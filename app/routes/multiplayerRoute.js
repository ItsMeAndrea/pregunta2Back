const express = require("express");

const {
  createGame,
  getGame,
  updateGame,
} = require("../controllers/multiplayerController");

const router = express.Router();

router.post("/multiplayer/addGame", createGame);
router.get("/multiplayer/getGame", getGame);
router.put("/multiplayer/updateGame", updateGame);

module.exports = router;
