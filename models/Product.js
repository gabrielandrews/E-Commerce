// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns

    id: {

      // define as integer
      type: DataTypes.INTEGER,

      // not null
      allowNull: false,

      // make primary key
      primaryKey: true,

      // turn on auto increment
      autoIncrement: true 
    },
    product_name: {

      // define as string
      type: DataTypes.STRING,

      // not null
      allowNull: false,
    },
    price: {

      // define as decimal
      type: DataTypes.DECIMAL,

      // not null
      allowNull: false,

      // validate that it is a decimal number
      validate: {
        isDecimal: true
      }
  },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
