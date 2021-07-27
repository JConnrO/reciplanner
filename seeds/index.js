const seedUsers = require('./user-seeds');
const seedRecipes = require('./recipes-seeds');
const seedVotes = require('./vote-seeds');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');
  await seedRecipes();
  console.log('--------------');
  await seedVotes();
  console.log('--------------');
  process.exit(0);
};

seedAll();
