// const User = require('./User');
// const Recipe = require('./Recipe');
// const Vote = require('./Vote');

// User.hasMany(Recipe, {
//     foreignKey: 'user_id'
//   });

//   Recipe.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });

//   User.belongsToMany(Recipe, {
//     through: Vote,
//     as: 'voted_recipes',
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });
  
//  Recipe.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_recipes',
//     foreignKey: 'recipe_id',
//     onDelete: 'SET NULL'
//   });

//   Vote.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
//   });
  
//   Vote.belongsTo(Recipe, {
//     foreignKey: 'recipe_id',
//     onDelete: 'SET NULL'
//   });
  
//   User.hasMany(Vote, {
//     foreignKey: 'user_id'
//   });
  
//   Recipe.hasMany(Vote, {
//     foreignKey: 'recipe_id'
//   });

// module.exports = { User , Recipe, Vote};