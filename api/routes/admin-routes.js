const express = require("express");
const adminRoutes = express.Router();
const adminController = require("../controllers/admin-controller");

// Defined get list route
adminRoutes.route("/").get(adminController.getListAdmin);
// Defined store route
adminRoutes.route("/").post(adminController.addAdmin);
// Defined delete | remove | destroy route
adminRoutes.route("/:id").delete(adminController.deleteAdmin);
//  Defined update route
adminRoutes.route("/:id").put(adminController.updateAdmin);
// Check username and password
adminRoutes.route("/login").post(adminController.checkAdmin);

module.exports = adminRoutes;
