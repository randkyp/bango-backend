"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movement_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      movement_logs.hasMany(models.invoice_details);
      movement_logs.hasMany(models.warehouses, {
        as: "from",
        foreignKey: "from_id",
      });
      movement_logs.hasMany(models.warehouses, {
        as: "to",
        foreignKey: "to_id",
      });
      movement_logs.hasMany(models.admins);
    }
  }
  movement_logs.init(
    {
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "movement_logs",
    }
  );
  return movement_logs;
};
