const sequelize = require('../config/connection');


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

  // create fields/columns for Recipe model
  Recipe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      youtube_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      post_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
    },
    
      
    })

  module.exports = Recipe;