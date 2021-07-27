const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    youtube_url: 'https://www.youtube.com/watch?v=Qc2aPjIJk-8',
    description: 'wow!',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    youtube_url: 'https://www.youtube.com/watch?v=AWNU1OccN5Q',
    description: 'wow!',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    youtube_url: "https://www.youtube.com/watch?v=joweUxpHaqc",
    description: 'wow!',
    user_id: 1
  },

  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
