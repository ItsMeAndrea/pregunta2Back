const express = require("express");

const {
  createGame,
  getGame,
  updateGame,
  getGameByUser,
} = require("../controllers/multiplayerController");

const router = express.Router();

router.post("/multiplayer/addGame", createGame);
router.get("/multiplayer/getGame", getGame);
router.get("/multiplayer/getGameByUser", getGameByUser);
router.put("/multiplayer/updateGame", updateGame);

module.exports = router;
