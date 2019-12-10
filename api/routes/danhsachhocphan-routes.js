const express = require("express");
const danhsachhocphanRoutes = express.Router();
const danhsachhocphanController = require("../controllers/danhsachhocphan-controller");

// Defined get list route
danhsachhocphanRoutes
  .route("/")
  .get(danhsachhocphanController.getListDanhSachHocPhan);
// Defined store route
danhsachhocphanRoutes
  .route("/")
  .post(danhsachhocphanController.addDanhSachHocPhan);
// Defined delete | remove | destroy route
danhsachhocphanRoutes
  .route("/:id")
  .delete(danhsachhocphanController.deleteDanhSachHocPhan);
//  Defined update route
danhsachhocphanRoutes
  .route("/:id")
  .put(danhsachhocphanController.updateDanhSachHocPhan);

module.exports = danhsachhocphanRoutes;
