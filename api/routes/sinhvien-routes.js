const express = require("express");
const sinhvienRoutes = express.Router();
const sinhvienController = require("../controllers/sinhvien-controller");

// Defined get data(index or listing) route
sinhvienRoutes.route("/").get(sinhvienController.getListSinhVien);
// Defined get 1 data route
sinhvienRoutes.route("/:id").get(sinhvienController.getSinhVien);
// Defined store route
sinhvienRoutes.route("/").post(sinhvienController.addSinhVien);
// Defined delete | remove | destroy route
sinhvienRoutes.route("/:id").delete(sinhvienController.deleteSinhVien);
//  Defined update route
sinhvienRoutes.route("/:id").put(sinhvienController.updateSinhVien);

module.exports = sinhvienRoutes;
