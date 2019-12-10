const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SinhVien = new Schema({
  id: { type: String },
  name: { type: String },
  gender: { type: String },
  address: { type: String },
  email: { type: String },
  phone: { type: String }
});

module.exports = mongoose.model("SinhVien", SinhVien);
