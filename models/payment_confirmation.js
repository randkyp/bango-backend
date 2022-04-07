"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class payment_confirmation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      payment_confirmation.belongsTo(models.invoice_headers);
    }
  }
  payment_confirmation.init(
    {
      img_path: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "payment_confirmation",
      paranoid: true,
    }
  );
  return payment_confirmation;
};
