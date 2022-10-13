'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs")
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Food)
      Author.hasMany(models.Order)
    }
  }
  Author.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Username is required`
        },
        notEmpty:{
          msg: `Username cannot be empty`
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Email is required`
        },
        notEmpty:{
          msg: `Email cannot be empty`
        },
        isEmail: {
          msg: `Wrong format email`
        }
      },
      unique: {
        msg: `Email must be unique`
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Password is required`
        },
        notEmpty:{
          msg: `Password cannot be empty`
        },
        min : {
          args: [5],
          msg: `Password length minimum 5`
        }
      }
    },
    role: DataTypes.BOOLEAN,
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `PhoneNumber is required`
        },
        notEmpty:{
          msg: `PhoneNumber cannot be empty`
        }
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: `Address is required`
        },
        notEmpty:{
          msg: `Address cannot be empty`
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Author',
  });
  Author.beforeCreate((instance, options) => {
    instance.password = bcrypt.hashSync(instance.password, 10)
  })
  return Author;
};