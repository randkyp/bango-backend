"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.addresses);
      users.hasMany(models.carts);
      users.hasMany(models.invoice_headers);
    }
  }
  users.init(
    {
      full_name: DataTypes.STRING,
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(512),
      },
      is_verified: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.BOOLEAN,
      },
      is_active: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.BOOLEAN,
      },
      is_pend_reset: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
