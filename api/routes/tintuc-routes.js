const express = require("express");
const tintucRoutes = express.Router();
const tintucController = require("../controllers/tintuc-controller");

tintucRoutes.route("/htql").get(tintucController.getDataHTQL);
tintucRoutes.route("/ctu").get(tintucController.getDataCTU);
tintucRoutes.route("/baogiaoduc").get(tintucController.getDataBaoGiaoDuc);
module.exports = tintucRoutes;
