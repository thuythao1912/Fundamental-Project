const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let DanhSachHocPhan = new Schema({
  id: { type: String },
  idMonHoc: { type: Schema.Types.ObjectId, ref: "MonHoc" },
  time: { type: String },
  date: { type: String }
});

module.exports = mongoose.model("DanhSachHocPhan", DanhSachHocPhan);
