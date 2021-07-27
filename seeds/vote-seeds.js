const { Vote } = require('../models');

const votedata = [
  {
    user_id: 1,
    recipe_id: 4
  }
];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
