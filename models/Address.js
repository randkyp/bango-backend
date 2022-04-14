const sequelize = require("../lib/sequelize");
const Sequelize = require("sequelize");

// import models to associate here
const User = require("./User");

const Address = sequelize.define(
  "Address",
  {
    address: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    postcode: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
  },
  { tableName: "addresses", paranoid: true }
);

// define associations here
Address.belongsTo(User);
User.hasMany(Address);

module.exports = Address;
