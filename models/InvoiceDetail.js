const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const InvoiceHeader = require("./InvoiceHeader");

const InvoiceDetail = sequelize.define(
  "InvoiceDetail",
  {
    price: { allowNull: false, type: DataTypes.INTEGER },
    quantity: { allowNull: false, type: DataTypes.INTEGER },
  },
  { tableName: "invoice_details", paranoid: true }
);

// define associations here
InvoiceDetail.belongsTo(InvoiceHeader);
InvoiceHeader.hasMany(InvoiceDetail);

module.exports = InvoiceDetail;
