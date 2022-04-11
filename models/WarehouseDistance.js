const sequelize = require("../lib/sequelize");
const { DataTypes } = require("sequelize");

const WarehouseDistance = sequelize.define(
  "WarehouseDistance",
  {
    from_postcode: { allowNull: false, type: DataTypes.INTEGER },
    to_postcode: { allowNull: false, type: DataTypes.INTEGER },
    duration: { allowNull: false, type: DataTypes.INTEGER },
  },
  { tableName: "warehouse_distances", paranoid: true }
);

module.exports = WarehouseDistance;
