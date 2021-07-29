const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all recipes for homepage
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
      console.log(dbPostData.recipe)

      const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));

      res.render('landing', {
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// login route 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// route to display user recipes and create recipes
router.get('/dashboard', (req, res) => {
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
      console.log(dbPostData)
      const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));

      res.render('dashboard', {
        recipes,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for edit post
router.get('/edit/:id', withAuth, (req, res) => {
  Recipe.findByPk(req.params.id, {
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
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = router;
