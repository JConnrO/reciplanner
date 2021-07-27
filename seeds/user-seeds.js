const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userdata = [
  {
    username: 'gordonramsey67',
    email: 'gordonramsey67@yahoo.com',
    password: 'password123'
  },
  {
    username: 'gordonramsey68',
    email: 'gordonramsey69@yahoo.com',
    password: 'password123'
  },
  {
    username: 'gordonramsey70',
    email: 'gordonramsey70@yahoo.com',
    password: 'password123'
  },
  {
    username: 'gordonramsey71',
    email: 'gordonramsey70@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'gordonramsey75',
    email: 'gmidggordonramsey75l4@weather.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
