const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
// const recipeRoutes = require('./recipe-routes');

// router.use('/users', userRoutes);
// router.use('/recipes', recipeRoutes);

const apiRoutes = require('./book-routes');


router.use('/api', apiRoutes);

module.exports = router;