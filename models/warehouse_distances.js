"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class warehouse_distances extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  warehouse_distances.init(
    {
      from_postcode: { allowNull: false, type: DataTypes.INTEGER },
      to_postcode: { allowNull: false, type: DataTypes.INTEGER },
      duration: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "warehouse_distances",
    }
  );
  return warehouse_distances;
};
