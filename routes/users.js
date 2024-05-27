  // Создаём роут для запросов категорий 
  const usersRouter = require('express').Router();
  const {checkAuth} = require("../middlewares/auth");
  // Импортируем вспомогательные функции
  const {findAllUsers, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword} = require('../middlewares/users');
  const {sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted, sendMe} = require('../controllers/users');
  
  const {createUser} = require("../middlewares/users");
  const {sendUserCreated} = require("../controllers/users")
  // Обрабатываем GET-запрос с роутом '/categories'
  usersRouter.get('/users', findAllUsers, sendAllUsers);
  // routes/users.js
// routes/users.js
usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated,
);
usersRouter.get("/users/:id", findUserById, sendUserById);

usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated,
);

usersRouter.delete(
  "/users/:id",
  checkAuth,
  deleteUser,
  sendUserDeleted
);
usersRouter.get("/me", checkAuth, sendMe);
  // Экспортируем роут для использования в приложении — app.js
  module.exports = usersRouter;
  