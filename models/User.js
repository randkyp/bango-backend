const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here

const User = sequelize.define(
  "User",
  {
    full_name: DataTypes.STRING,
    email: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING(512),
    },
    is_verified: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.BOOLEAN,
    },
    is_active: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.BOOLEAN,
    },
    is_pend_reset: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.BOOLEAN,
    },
  },
  { tableName: "users", paranoid: true }
);

// define associations here

module.exports = User;
