const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Pizza',
    youtube_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description: 10,
    user_id: 1
  },
  {
    title: 'Pizza',
    youtube_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description: 10,
    user_id: 2
  },
  {
    title: 'Pizza',
    youtube_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description: 10,
    user_id: 3
  },
  {
    title: 'Pizza',
    youtube_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description: 10,
    user_id: 4
  },
  {
    title: 'Pizza',
    youtube_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    description: 10,
    user_id: 5
  },

];

const seedPosts = () => Recipe.bulkCreate(recipedata);

module.exports = seedPosts;
