const router = require("express").Router();
// const sequelize = require('../config/connection');
// const { Post, User, Comment, Vote } = require('../models');
// const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/dashboard', withAuth, (req, res) => {

    // Send all of the books to 'index.handlebars' as an object
    const posts = [
        {
          title: 'Best Chicken Penne',
          youtube_url: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
          description: 'Super Tasty',
        },
        {
            title: 'Best Chicken Penne',
            youtube_url: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
            description: 'Super Tasty',
        },
        {
            title: 'Best Chicken Penne',
            youtube_url: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
            description: 'Super Tasty',
        }
      ];

    const data = {
      cards: posts
    };
    res.render('dashboard', data);
})


module.exports = router;
 