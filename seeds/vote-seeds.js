const { Vote } = require('../models');

const votedata = [
  {
    user_id: 10,
    post_id: 19
  },
  {
    user_id: 8,
    post_id: 8
  },
  {
    user_id: 1,
    post_id: 12
  },

];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
