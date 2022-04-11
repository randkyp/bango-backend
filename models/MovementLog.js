const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

// import models to associate here
const InvoiceDetail = require("./InvoiceDetail");
const Warehouse = require("./Warehouse");
const Admin = require("./Admin");

const MovementLog = sequelize.define(
  "MovementLog",
  {
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: "movement_logs" }
);

// define associations here
MovementLog.belongsTo(InvoiceDetail);
MovementLog.belongsTo(Warehouse, { as: "from", foreignKey: "from_id" });
MovementLog.belongsTo(Warehouse, { as: "to", foreignKey: "to_id" });
MovementLog.belongsTo(Admin);

module.exports = MovementLog;
