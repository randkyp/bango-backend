const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

const Admin = sequelize.define(
  "Admin",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(512),
      allowNull: false,
    },
  },
  { tableName: "admins" }
);

module.exports = Admin;
