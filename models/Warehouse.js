const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const Product = require("./Product");

const Warehouse = sequelize.define(
  "Warehouse",
  {
    name: { allowNull: false, type: DataTypes.STRING },
    address: { allowNull: false, type: DataTypes.TEXT },
    postcode: { allowNull: false, type: DataTypes.INTEGER },
  },
  { tableName: "warehouses", paranoid: true }
);

// define associations here
Warehouse.belongsTo(Product);
Product.hasMany(Warehouse);

module.exports = Warehouse;
