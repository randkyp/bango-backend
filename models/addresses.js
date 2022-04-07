"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class addresses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      addresses.belongsTo(models.users);
    }
  }
  addresses.init(
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      postcode: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "addresses",
      paranoid: true,
    }
  );
  return addresses;
};
