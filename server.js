const express = require('express');
const routes = require('./controllers');
const path = require('path');
const sequelize = require('./config/connection');
const exphbs = require(`express-handlebars`);
// Requires the 'express-session' module
const session = require(`express-session`);

const app = express();
const PORT = process.env.PORT || 3001;

// Sets Handlebars as the default template engine
const helpers = require('./utils/helpers');

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Sets up the sessions with the 'secret', 'resave', 'saveUninitialized' options
app.use(
  session({
    secret: "This is a major secret!",
    resave: false,
    saveUninitialized: false,
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true}).then(() => {
  app.listen(PORT, () => console.log(`Now listening on: http://localhost:${PORT}`));
});




