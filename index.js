const express = require("express");

const app = express();
app.use(express.json());

const { sequelize } = require("./models");

try {
  sequelize.authenticate();
  console.log("sequelize: connected to database.");
} catch (error) {
  console.error(error);
}
