const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Recipe, User, Vote } = require('../models');

// get all recipes for homepage
// router.get('/', (req, res) => {
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
//       const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));

//       res.render('landing', {
//         recipes,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // get single post
// router.get('/recipe/:id', (req, res) => {
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

// THE FOLLOWING ROUTES ARE FOR FRONTEND TESTING ONLY
// Landing Page

// DATA

// Routes
// =============================================================

router.get('/', (req, res) => {

    // Send all of the books to 'index.handlebars' as an object
    const posts = [
        {
          title: 'Best Chicken Penne',
          link: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
          description: 'Super Tasty',
          upvote: 4000,
          username: 'ssss'
        },
        {
          title: 'Amazing Chicken Marsala',
          link: 'https://www.youtube.com/watch?v=AWNU1OccN5Q',
          description: 'Much wow',
          upvote: 2000,
          username: 'ssss'
        },
        {
          title: 'Super simple Sushi',
          link: "https://www.youtube.com/watch?v=joweUxpHaqc",
          description: 'No way!',
          upvote: 4,
          username: 'ssss'
        }
      ];

    const data = {
      cards: posts
    };
    res.render('landing', data);
});

// //LOGIN dummy data SMM

router.get('/login', (req, res) => {
    const food = [
        {
          title: 'Love You Forever',
          read: false,
          author: 'Robert Munsch'
        },
        {
          title: 'The Giving Tree',
          read: false,
          author: 'Shel Silverstein'
        }
      ]

    const data = {
      library: food
    };
    res.render('login', data);
});



router.get('/dashboard', (req,res) =>{
  res.render('dashboard')
})
module.exports = router;