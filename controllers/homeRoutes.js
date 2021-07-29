const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Vote } = require('../models');

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

// login route if user loggedin
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// route for dashboard
router.get('/dashboard', (req,res) =>{
  res.render('dashboard')
})

//route for edit post
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'youtube_url',
      'title',
      'description',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
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
        
        res.render('dashboard', {
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
