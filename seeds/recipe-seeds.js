const { Recipe } = require('../models');

const recipedata = [
  {
    title: 'Pizza oh my gawd',
    youtube_url: 'https://www.youtube.com/watch?v=sv3TXMSv6Lw',
    description: 'This recipe was super easy!',
    user_id: 1
  },
  {
    title: 'Best Damn Hamburger',
    youtube_url: 'https://www.youtube.com/watch?v=iM_KMYulI_s',
    description: 'This is the greatest hamburger recipe, no questions, no doubts',
    user_id: 2
  },
  {
    title: 'Simple Vegan Recipe! ',
    youtube_url: 'https://www.youtube.com/watch?v=HrKs-dzp-Bc',
    description: 'For my non-meat ppl!',
    user_id: 3
  },
  {
    title: 'Must try falafel!',
    youtube_url: 'https://www.youtube.com/watch?v=aQD0ndQGpG0',
    description: 'So tasty and super good! No cap',
    user_id: 4
  },
  {
    title: 'How to cook an egg',
    youtube_url: 'https://www.youtube.com/watch?v=X5oD_thIk3c',
    description: 'LOL! Its so easy',
    user_id: 5
  },

];

const seedPosts = () => Recipe.bulkCreate(recipedata);

module.exports = seedPosts;
