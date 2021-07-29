const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Recipe.findAll({
    attributes: [
      'id',
      'youtube_url',
      'title',
      'description',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));

      res.render('homepage', {
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/recipe/:id', (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
        'id',
        'youtube_url',
        'title',
        'description',
        'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const recipe = dbPostData.get({ plain: true });

      res.render('single-post', {
        recipe,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;