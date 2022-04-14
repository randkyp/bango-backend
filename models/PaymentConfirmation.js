const sequelize = require("../lib/sequelize");
const Sequelize = require("sequelize");

// import models to associate here
const InvoiceHeader = require("./InvoiceHeader");

const PaymentConfirmation = sequelize.define(
  "PaymentConfirmation",
  {
    img_path: Sequelize.TEXT,
  },
  { tableName: "payment_confirmations", paranoid: true }
);

// define associations here
PaymentConfirmation.belongsTo(InvoiceHeader);
InvoiceHeader.hasOne(PaymentConfirmation);

module.exports = PaymentConfirmation;
