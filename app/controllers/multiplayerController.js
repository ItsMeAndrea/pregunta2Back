const dbQuery = require("../db/dev/dbQuery");
const { errorMessage, successMessage, status } = require("../helpers/status");
const { isEmpty } = require("../helpers/validation");

const createGame = async (req, res) => {
  const {
    game_id,
    player_one,
    player_two,
    questions_one,
    questions_two,
  } = req.body;

  if (isEmpty(game_id)) {
    errorMessage.error = "Hubo en error en la operacion";
    return res.status(status.bad).send(errorMessage);
  }

  const createGameQuery =
    "INSERT INTO multi_game (game_id, player_one, player_two, questions_one, questions_two) VALUES($1,$2, $3, $4, $5) RETURNING *";
  const values = [
    game_id,
    player_one,
    player_two,
    questions_one,
    questions_two,
  ];

  try {
    const { rows } = await dbQuery.query(createGameQuery, values);
    const dbResponse = rows[0];

    successMessage.data = dbResponse;
    return res.status(status.created).send(successMessage);
  } catch (error) {
    errorMessage.error = "Hubo un error en la operacion";
    return res.status(status.error).send(errorMessage);
  }
};

const getGame = async (req, rs) => {
  const { game_id } = req.body;

  const getGameQuery = "SELECT * FROM multi_game WHERE game_id=$1";

  try {
    const { rows } = await dbQuery.query(getGameQuery, [game_id]);
    const dbResponse = rows[0];
    if (!dbResponse) {
      errorMessage.error = "No hay informacion del juego";
      return res.status(status.notfound).send(errorMessage);
    }

    successMessage.data = dbResponse;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = "Hubo un error en la operacion";
    return res.status(status.error).send(errorMessage);
  }
};

module.exports = { createGame, getGame };
