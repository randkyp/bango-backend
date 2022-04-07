"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class stocks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      stocks.belongsTo(models.products);
      stocks.belongsTo(models.warehouses);
    }
  }
  stocks.init(
    {
      ready_stock: { allowNull: false, type: DataTypes.INTEGER },
      reserve_stock: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "stocks",
    }
  );
  return stocks;
};
