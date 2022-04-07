"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class warehouses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      warehouses.hasMany(models.products);
    }
  }
  warehouses.init(
    {
      name: { allowNull: false, type: DataTypes.STRING },
      address: { allowNull: false, type: DataTypes.TEXT },
      postcode: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "warehouses",
      paranoid: true,
    }
  );
  return warehouses;
};
