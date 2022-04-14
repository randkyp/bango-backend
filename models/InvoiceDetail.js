const sequelize = require("../lib/sequelize");
const Sequelize = require("sequelize");

// import models to associate here
const InvoiceHeader = require("./InvoiceHeader");

const InvoiceDetail = sequelize.define(
  "InvoiceDetail",
  {
    price: { allowNull: false, type: Sequelize.INTEGER },
    quantity: { allowNull: false, type: Sequelize.INTEGER },
  },
  { tableName: "invoice_details", paranoid: true }
);

// define associations here
InvoiceDetail.belongsTo(InvoiceHeader);
InvoiceHeader.hasMany(InvoiceDetail);

module.exports = InvoiceDetail;
