'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Foodingconj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Foodingconj.belongsTo(models.Food)
      Foodingconj.belongsTo(models.Ingredient)
    }
  }
  Foodingconj.init({
    FoodId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `FoodId is required`
        },
        notEmpty:{
          msg: `FoodId cannot be empty`
        }
      }
    },
    IngredientId:  {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `IngredientId is required`
        },
        notEmpty:{
          msg: `IngredientId cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Foodingconj',
  });
  return Foodingconj;
};