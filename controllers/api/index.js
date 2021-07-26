const router = require('express').Router();

// const userRoutes = require('./user-routes.js');
// const recipeRoutes = require('./recipe-routes');

//dummy data 
const apiRoutes = require('./book-routes');

// router.use('/users', userRoutes);

// router.use('/recipes', recipeRoutes);

//dummy data
router.use('/api', apiRoutes);

module.exports = router;