const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const Product = require("./Product");
const Warehouse = require("./Warehouse");

const Stock = sequelize.define(
  "Stock",
  {
    ready_stock: { allowNull: false, type: DataTypes.INTEGER },
    reserve_stock: { allowNull: false, type: DataTypes.INTEGER },
  },
  { tableName: "stocks" }
);

// define associations here
Stock.belongsTo(Product);
Product.hasMany(Stock);
Stock.belongsTo(Warehouse);
Warehouse.hasOne(Stock);

module.exports = Stock;
