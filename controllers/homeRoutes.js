const router = require("express").Router();

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

module.exports = router;