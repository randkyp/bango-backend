const sequelize = require("../lib/sequelize");
const Address = require("../models/Address");
const Admin = require("../models/Admin");
const Cart = require("../models/Cart");
const Category = require("../models/Category");
const InvoiceDetail = require("../models/InvoiceDetail");
const InvoiceHeader = require("../models/InvoiceHeader");
const MovementLog = require("../models/MovementLog");
const PaymentConfirmation = require("../models/PaymentConfirmation");
const Product = require("../models/Product");
const Stock = require("../models/Stock");
const User = require("../models/User");
const Warehouse = require("../models/Warehouse");
const WarehouseDistance = require("../models/WarehouseDistance");

module.exports = {
  get: async (req, res) => {
    try {
      const products = await Product.findAll({
        offset: +req.params.from,
        limit: +req.params.limit,
      });
      res.status(200).send(products);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
  add: async (req, res) => {
    try {
      const {
        name,
        buy_price,
        sell_price,
        description,
        img_path,
        category,
        // contains an array: {warehouse name, ready_stock, reserve_stock}
        warehouses,
      } = req.body;

      // finds and adds category by name, instead of ID
      const CategoryInstance = await Category.findOne({
        where: {
          category,
        },
      });

      const ins = await Product.create({
        name,
        buy_price: +buy_price,
        sell_price: +sell_price,
        description,
        img_path,
      });

      //@ts-ignore vs code can't enumerate dynamic instance methods
      await ins.setCategory(CategoryInstance);

      warehouses.forEach((warehouse) => {
        const WarehouseInstance = Warehouse.findOne({
          where: {
            name: warehouse.name,
          },
        });

        Stock.create({});

        //@ts-ignore vs code can't enumerate dynamic instance methods
        // ins.addWarehouse(warehouse);
      });

      // returns the primary key of the just-inserted product
      //@ts-ignore vs code can't see the dynamically-generated id prop
      res.status(200).send(`${ins.id}`);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};
