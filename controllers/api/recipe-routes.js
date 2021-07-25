const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Recipe, User, Vote } = require('../../models');

// get all recipes
router.get('/', (req, res) => {
    console.log('======================');
    Recipe.findAll({
      // Query configuration
      attributes: [
       'id',
       'youtube_url', 
       'title', 
       'description',
       'created_at',
       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
      ],
      order: [['created_at', 'DESC']],
      include: [
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  
  });