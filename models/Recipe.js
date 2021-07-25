// const sequelize = require('../config/connection');
// const { Model, DataTypes } = require('sequelize');

// // create our Recipe model
// class Recipe extends Model {
//     static upvote(body, models) {
//       return models.Vote.create({
//         user_id: body.user_id,
//         recipe_id: body.recipe_id
//       }).then(() => {
//         return Post.findOne({
//           where: {
//             id: body.recipe_id
//           },
//           attributes: [
//             'id',
//             'youtube_url',
//             'title',
//             'description',
//             'created_at',
//             [
//               sequelize.literal('(SELECT COUNT(*) FROM vote WHERE recipe.id = vote.recipe_id)'),
//               'vote_count'
//             ]
//           ]
//         });
//       });
//     }
//   }

// // create fields/columns for Recipe model
// Recipe.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         youtube_url: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 isURL: true
//             }
//         },
//         description: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id'
//             }
//         }
//     },
//     {
//         sequelize,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'recipe'
//     }
// );

// module.exports = Recipe;