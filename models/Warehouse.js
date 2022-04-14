const sequelize = require("../lib/sequelize");
const Sequelize = require("sequelize");

// import models to associate here
const Product = require("./Product");

const Warehouse = sequelize.define(
  "Warehouse",
  {
    name: { allowNull: false, type: Sequelize.STRING },
    address: { allowNull: false, type: Sequelize.TEXT },
    postcode: { allowNull: false, type: Sequelize.INTEGER },
  },
  { tableName: "warehouses", paranoid: true }
);

// define associations here
Warehouse.belongsTo(Product);
Product.hasMany(Warehouse);

module.exports = Warehouse;
