// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Recipe, User, Vote } = require('../models');
// const withAuth = require('../utils/auth');

// // get all posts for homepage
// router.get('/', withAuth, (req, res) => {
//   console.log('======================');
//   Recipe.findAll({
//     attributes: [
//       'id',
//       'youtube_url',
//       'title',
//       'description',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       console.log(dbPostData)
//       const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));

//       res.render('dashboard', {
//         recipes,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// //route to render edit-post.handlebars template 
// router.get('/edit/:id', withAuth, (req, res) => {
//   Post.findByPk(req.params.id, {
//     attributes: [
//       'id',
//       'youtube_url',
//       'title',
//       'description',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (dbPostData) {
//         const post = dbPostData.get({ plain: true });

//         res.render('edit-post', {
//           post,
//           loggedIn: true
//         });
//       } else {
//         res.status(404).end();
//       }
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     });
// });

// // get single post
// router.get('/recipe/:id', withAuth, (req, res) => {
//   Recipe.findOne({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'youtube_url',
//       'title',
//       'description',
//       'created_at',
//       [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
//     ],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No post found with this id' });
//         return;
//       }

//       const recipe = dbPostData.get({ plain: true });

//       // Create handlebar template
//       res.render('single-post', {
//         recipe,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/login', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;