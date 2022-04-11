const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const sequelize = require("./lib/sequelize");
const Address = require("./models/Address");
const Admin = require("./models/Admin");
const Cart = require("./models/Cart");
const Category = require("./models/Category");
const InvoiceDetail = require("./models/InvoiceDetail");
const InvoiceHeader = require("./models/InvoiceHeader");
const MovementLog = require("./models/MovementLog");
const PaymentConfirmation = require("./models/PaymentConfirmation");
const Product = require("./models/Product");
const Stock = require("./models/Stock");
const User = require("./models/User");
const Warehouse = require("./models/Warehouse");
const WarehouseDistance = require("./models/WarehouseDistance");

// router imports go here

const port = process.env.PORT || 3030;

(async () => {
  try {
    await sequelize.authenticate();
    console.log("sequelize: connected to database.");
  } catch (error) {
    console.error(error);
  }
})();

(async () => {
  try {
    // careful: when not using class auto-enum/imports, sync order is important
    // because foreign key depedencies, etc.
    await User.sync({ alter: true });
    await Product.sync({ alter: true });
    await Warehouse.sync({ alter: true });
    await Stock.sync({ alter: true });
    await Address.sync({ alter: true });
    await Admin.sync({ alter: true });
    await Cart.sync({ alter: true });
    await Category.sync({ alter: true });
    await InvoiceHeader.sync({ alter: true });
    await InvoiceDetail.sync({ alter: true });
    await MovementLog.sync({ alter: true });
    await PaymentConfirmation.sync({ alter: true });
    await WarehouseDistance.sync({ alter: true });
    console.log("sequelize: synced table structures successfully.");
    // test addition
    // await User.create({
    //   full_name: "test",
    //   email: "mail@mail.com",
    //   password: "123",
    // });
    // console.log("test user inserted successfully.");
  } catch (error) {
    console.error("sync:");
    console.error(error);
  }
})();
