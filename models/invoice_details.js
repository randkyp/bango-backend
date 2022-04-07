"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class invoice_details extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      invoice_details.belongsTo(models.products);
    }
  }
  invoice_details.init(
    {
      price: { allowNull: false, type: DataTypes.INTEGER },
      quantity: { allowNull: false, type: DataTypes.INTEGER },
    },
    {
      sequelize,
      modelName: "invoice_details",
      paranoid: true,
    }
  );
  return invoice_details;
};
