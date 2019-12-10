const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let MonHoc = new Schema({
  id: { type: String },
  name: { type: String },
  description: { type: String }
});

module.exports = mongoose.model("MonHoc", MonHoc);
