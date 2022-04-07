"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class invoice_headers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      invoice_headers.hasMany(models.invoice_details);
      invoice_headers.belongsTo(models.users);
      invoice_headers.hasOne(models.payment_confirmation);
    }
  }
  invoice_headers.init(
    {
      code: { allowNull: false, type: DataTypes.STRING },
      grand_total: { allowNull: false, type: DataTypes.INTEGER },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "invoice_headers",
      paranoid: true,
    }
  );
  return invoice_headers;
};
