'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.belongsTo(models.Author)
      Food.hasMany(models.Order)
      Food.hasMany(models.Foodingconj)
      Food.belongsTo(models.Category)
    }
  }
  Food.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Name is required`
        },
        notEmpty:{
          msg: `Name cannot be empty`
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Description is required`
        },
        notEmpty:{
          msg: `Description cannot be empty`
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Price is required`
        },
        notEmpty:{
          msg: `Price cannot be empty`
        }
      }
    },
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `ImageUrl is required`
        },
        notEmpty:{
          msg: `ImageUrl cannot be empty`
        }
      }
    },
    status: {
      type: DataTypes.STRING,
    },
    AuthorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `AuthorId is required`
        },
        notEmpty:{
          msg: `AuthorId cannot be empty`
        }
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: `CategoryId is required`
        },
        notEmpty:{
          msg: `CategoryId cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Food',
  });
  Food.beforeCreate((instance, options) => {
    instance.status = "Available"
  })
  return Food;
};