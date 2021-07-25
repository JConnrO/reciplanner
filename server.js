const express = require('express');
const path = require('path');
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
const books = [
  {
    title: 'Love You Forever',
    read: false,
    author: 'Robert Munsch'
  },
  {
    title: 'The Giving Tree',
    read: false,
    author: 'Shel Silverstein'
  },
  {
    title: 'Where the Red Fern Grows',
    read: true,
    author: 'Wilson Rawls'
  },
  {
    title: 'The Fault in Our Stars',
    read: true,
    author: 'John Green'
  },
  {
    title: 'Out of My Mind',
    read: false,
    author: 'Sally Engelfried'
  },
  {
    title: 'Wonder',
    read: false,
    author: 'Barbara Schultz'
  }
];

// Routes
// =============================================================

app.get('/', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  const data = {
    library: books
  };
  res.render('index', data);
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




