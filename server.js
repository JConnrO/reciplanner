const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const helpers = require('./utils/helper');

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.use(require('./controllers/'));

// turn on connection to db and server
sequelize.sync({ force: false}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));
});


// THE FOLLOWING ROUTES ARE FOR FRONTEND TESTING ONLY
// Landing Page

// DATA
const newPosts = [
  {
    title: 'Best Chicken Penne',
    link: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
    description: 'Super Tasty',
    post_id: 4000,
    username: 'ssss'
  },
  {
    title: 'Amazing Chicken Marsala',
    link: 'https://www.youtube.com/watch?v=AWNU1OccN5Q',
    description: 'Much wow',
    post_id: 4000,
    username: 'ssss'
  },
  {
    title: 'Super simple Sushi',
    link: "https://www.youtube.com/watch?v=joweUxpHaqc",
    description: 'No way!',
    post_id: 4000,
    username: 'ssss'
  }
];

// Routes
// =============================================================

app.get('/', (req, res) => {
  // Send all of the books to 'index.handlebars' as an object
  const data = {
    cards: newPosts
  };
  res.render('landing', data);
});

// //LOGIN dummy data SMM
// const food = [
//   {
//     title: 'Love You Forever',
//     read: false,
//     author: 'Robert Munsch'
//   },
//   {
//     title: 'The Giving Tree',
//     read: false,
//     author: 'Shel Silverstein'
//   }
// ]

// app.get('/login', (req, res) => {
//   const data = {
//     library: food
//   };
//   res.render('login', data);
// });




