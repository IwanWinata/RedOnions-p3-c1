'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Author)
      Order.belongsTo(models.Food)
    }
  }
  Order.init({
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
    FoodId: {
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
    isPaid: DataTypes.BOOLEAN,
    paidAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};