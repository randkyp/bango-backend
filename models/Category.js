const sequelize = require("../lib/sequelize");
const Sequelize = require("sequelize");

// import models to associate here
const Product = require("./Product");

const Category = sequelize.define(
  "Category",
  {
    category: { allowNull: false, type: Sequelize.STRING },
  },
  { tableName: "categories", paranoid: true }
);

// define associations here
Category.belongsTo(Product);
Product.hasMany(Category);

module.exports = Category;
