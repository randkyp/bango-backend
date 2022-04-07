"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class carts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      carts.belongsTo(models.users);
      carts.hasMany(models.products);
    }
  }
  carts.init(
    {
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "carts",
    }
  );
  return carts;
};
