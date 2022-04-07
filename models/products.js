"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      products.hasMany(models.warehouses);
      products.hasMany(models.carts);
      products.hasMany(models.invoice_details);
      products.hasMany(models.categories);
    }
  }
  products.init(
    {
      name: { allowNull: false, type: DataTypes.STRING },
      buy_price: { allowNull: false, type: DataTypes.INTEGER },
      sell_price: { allowNull: false, type: DataTypes.INTEGER },
      description: DataTypes.TEXT,
      img_path: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "products",
      paranoid: true,
    }
  );
  return products;
};
