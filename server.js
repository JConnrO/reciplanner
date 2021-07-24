const express = require('express');
const path = require('path');
// const routes = require('./routes');
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars");
// Requires the 'express-session' module
// const session = require(`express-session`);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


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
    link: 'https://www.youtube.com/embed/Qc2aPjIJk-8',
    description: 'Super Tasty',
    upvote: 'Robert Munsch',
    username: 'ssss'
  },
  {
    title: 'Amazing Chicken Marsala',
    link: 'https://www.youtube.com/embed/AWNU1OccN5Q',
    description: 'Much wow',
    upvote: 'Robert Munsch',
    username: 'ssss'
  },
  {
    title: 'Super simple Sushi',
    link: "https://www.youtube.com/embed/joweUxpHaqc",
    description: 'No way!',
    upvote: 'Robert Munsch',
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
  res.render('index', data);
});




