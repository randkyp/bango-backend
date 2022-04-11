const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const User = require("./User");

const InvoiceHeader = sequelize.define(
  "InvoiceHeader",
  {
    code: { allowNull: false, type: DataTypes.STRING },
    grand_total: { allowNull: false, type: DataTypes.INTEGER },
    status: DataTypes.STRING,
  },
  { tableName: "invoice_headers", paranoid: true }
);

// define associations here
InvoiceHeader.belongsTo(User);
User.hasMany(InvoiceHeader);

module.exports = InvoiceHeader;
