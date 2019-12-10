const DanhSachHocPhan = require("../models/danhsachhocphan-model");

//get List mon hoc
exports.getListDanhSachHocPhan = (req, res) => {
  DanhSachHocPhan.find(function(err, dshp) {
    if (err) {
      console.log(err);
    } else {
      res.json(dshp);
    }
  });
};

// get 1 data mon hoc
exports.getDanhSachHocPhan = (req, res) => {
  DanhSachHocPhan.findById(req.params.id, function(err, dshp) {
    res.json(dshp);
  });
};

//add mon hoc
exports.addDanhSachHocPhan = (req, res) => {
  let dshp = new DanhSachHocPhan(req.body);
  dshp.save(function(error) {
    if (!error) {
      DanhSachHocPhan.find({})
        .populate("idMonHoc")
        .exec(function(error, dshp) {
          console.log(JSON.stringify(dshp, null, "\t"));
          res.status(200).json({ ds: "subject in added successfully", dshp });
        });
    }
  });
};

//delete mon hoc
exports.deleteDanhSachHocPhan = (req, res) => {
  DanhSachHocPhan.findByIdAndRemove(req.params.id, function(err, dshp) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
};

//update mon hoc
exports.updateDanhSachHocPhan = (req, res) => {
  DanhSachHocPhan.findById(req.params.id, function(err, dshp) {
    if (!dshp) res.status(404).send("data is not found");
    else {
      console.log(dshp);
      dshp.id = req.body.id;
      dshp.idMonHoc = req.body.idMonHoc;
      dshp.time = req.body.time;
      dshp.date = req.body.date;
      dshp
        .save()
        .then(dshp => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};
