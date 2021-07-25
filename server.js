const express = require('express');
const routes = require('./routes');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
// Requires the 'express-session' module
// const session = require(`express-session`);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
const helpers = require('./utils/helper');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));
});


// THE FOLLOWING ROUTES ARE FOR FRONTEND TESTING ONLY
// Landing Page

// DATA
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

// Routes
// =============================================================

app.get('/', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  const data = {
    cards: posts
  };
  res.render('landing', data);
});

//LOGIN dummy data SMM
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

app.get('/login', (req, res) => {
  const data = {
    library: food
  };
  res.render('login', data);
});




