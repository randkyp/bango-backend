const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here

const Product = sequelize.define(
  "Product",
  {
    name: { allowNull: false, type: DataTypes.STRING },
    buy_price: { allowNull: false, type: DataTypes.INTEGER },
    sell_price: { allowNull: false, type: DataTypes.INTEGER },
    description: DataTypes.TEXT,
    img_path: DataTypes.TEXT,
  },
  { tableName: "products", paranoid: true }
);

// define associations here

module.exports = Product;
