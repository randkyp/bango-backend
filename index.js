const express = require("express");

const app = express();
app.use(express.json());

const db = require("./models");

try {
  db.sequelize.authenticate();
  console.log("sequelize: connected to database.");
} catch (error) {
  console.error(error);
}

try {
  db.sequelize.sync();
  console.log("sequelize: synced table structures successfully.");
} catch (error) {
  console.error("sync:");
  console.error(error);
}
