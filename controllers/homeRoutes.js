const router = require("express").Router();
const { Recipe, User, Vote } = require('../models');
const sequelize = require('../config/connection');
// THE FOLLOWING ROUTES ARE FOR FRONTEND TESTING ONLY
// Landing Page

// DATA

// Routes
// =============================================================

// router.get('/', (req, res) => {
//   console.log('======================');
//   Recipe.findAll({
//     // Query configuration
//     attributes: [
//      'id',
//      'youtube_url', 
//      'title', 
//      'description',
//      'created_at',
//      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'), 'vote_count']
//     ],
//     order: [['created_at', 'DESC']],
//     include: [
//       {
//         model: User,
//         attributes: ['username']
//       }
//     ]
//   })
//     .then(dbPostData => {
//       const posts = dbPostData.map(post => post.get({ plain: true }));

//       res.render('homepage', {
//         posts,
//         loggedIn: req.session.loggedIn
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
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

//LOGIN dummy data SMM

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