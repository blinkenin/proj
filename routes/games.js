// Файл routes/games.js

const gamesRouter = require('express').Router();
const {checkAuth} = require("../middlewares/auth");
const {createGame, updateGame, deleteGame, checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsGameExists, checkIsVoteRequest} = require("../middlewares/games");
const {sendGameCreated, sendGameUpdated, sendGameDeleted} = require("../controllers/games")
const {findAllGames} = require('../middlewares/games');
const {sendAllGames} = require('../controllers/games');
const {findGameById} = require("../middlewares/games");
const {sendGameById} = require("../controllers/games")
gamesRouter.get('/games', findAllGames, sendAllGames);

gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable , checkEmptyFields, checkAuth,  createGame, sendGameCreated);

gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
);

gamesRouter.delete(
    "/games/:id",
    checkAuth,
    deleteGame,
    sendGameDeleted
)
module.exports = gamesRouter;