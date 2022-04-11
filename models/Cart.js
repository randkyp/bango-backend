const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const User = require("./User");
const Product = require("./Product");

const Cart = sequelize.define(
  "Cart",
  {
    qty: DataTypes.INTEGER,
  },
  { tableName: "carts" }
);

// define associations here
Cart.belongsTo(User);
User.hasMany(Cart);
Cart.belongsTo(Product);
Product.hasMany(Cart);

module.exports = Cart;
