const SinhVien = require("../models/sinhvien-model");

// Get data(index or listing)
exports.getListSinhVien = (req, res) => {
  SinhVien.find(function(err, sv) {
    if (err) {
      console.log(err);
    } else {
      res.json(sv);
    }
  });
};

//Get 1 data
exports.getSinhVien = (req, res) => {
  SinhVien.findById(req.params.id, function(err, sv) {
    res.json(sv);
  });
};

//Add Sinh Vien
exports.addSinhVien = (req, res) => {
  let sv = new SinhVien(req.body);
  sv.save()
    .then(sv => {
      res.status(200).json({ sv: "sinh vien in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

//Delete Sinh Vien
exports.deleteSinhVien = (req, res) => {
  SinhVien.findByIdAndRemove(req.params.id, function(err, sv) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
};

//Update Sinh Vien
exports.updateSinhVien = (req, res) => {
  SinhVien.findById(req.params.id, function(err, sv) {
    if (!sv) res.status(404).send("data is not found");
    else {
      console.log(sv);
      sv.id = req.body.id;
      sv.name = req.body.name;
      sv.gender = req.body.gender;
      sv.address = req.body.address;
      sv.email = req.body.email;
      sv.phone = req.body.phone;
      sv.save()
        .then(sv => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};
