// Создаём роут для запросов категорий 
const categoriesRouter = require('express').Router();
const {checkAuth} = require("../middlewares/auth");
// Импортируем вспомогательные функции
const {findAllCategories, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName} = require('../middlewares/categories');
const {sendAllCategories, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {sendCategoryCreated} = require("../controllers/categories");
const {createCategory} = require("../middlewares/categories");

// Обрабатываем GET-запрос с роутом '/categories'
categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
// routes/categories.js
// routes/categories.js
// routes/categories.js
categoriesRouter.post(
    "/categories", 
    findAllCategories,
    checkIsCategoryExists, 
    checkEmptyName,
    checkAuth,
    createCategory, 
    sendCategoryCreated
);
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById);

categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
);

categoriesRouter.delete(
    "/categories/:id",
    checkAuth,
    deleteCategory,
    sendCategoryDeleted
)
// Экспортируем роут для использования в приложении — app.js
module.exports = categoriesRouter;