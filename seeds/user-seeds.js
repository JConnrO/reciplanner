const sequelize = require('../config/connection');
const { User, Recipe } = require('../models');

const userdata = [
  {
    username: 'lifeofpie',
    email: 'lifeofpie@yahoo.com',
    password: 'password123'
  },
  {
    username: 'gordonramsey68',
    email: 'gordonramsey69@yahoo.com',
    password: 'password123'
  },
  {
    username: 'savethechikens',
    email: 'nobeef70@yahoo.com',
    password: 'password123'
  },
  {
    username: 'chkpeasrlyfe',
    email: 'peas@aol.com',
    password: 'password123'
  },
  {
    username: 'howdoicook',
    email: 'gmidggordonramsey75l4@weather.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
