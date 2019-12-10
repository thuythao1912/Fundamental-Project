const express = require("express");
const monhocRoutes = express.Router();
const monhocController = require("../controllers/monhoc-controller");

// Defined get data(index or listing) route
monhocRoutes.route("/").get(monhocController.getListMonHoc);

// Defined get 1 data route
monhocRoutes.route("/:id").get(monhocController.getMonHoc);

// Defined store route
monhocRoutes.route("/").post(monhocController.addMonHoc);

// Defined delete | remove | destroy route
monhocRoutes.route("/:id").delete(monhocController.deleteMonHoc);

//  Defined update route
monhocRoutes.route("/:id").put(monhocController.updateMonHoc);

module.exports = monhocRoutes;
