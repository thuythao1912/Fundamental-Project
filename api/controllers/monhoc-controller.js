const MonHoc = require("../models/monhoc-model");
const DSHP = require("../models/danhsachhocphan-model");

//get List mon hoc
exports.getListMonHoc = (req, res) => {
  MonHoc.find(function(err, mh) {
    if (err) {
      console.log(err);
    } else {
      res.json(mh);
    }
  });
};

// get 1 data mon hoc
exports.getMonHoc = (req, res) => {
  MonHoc.findById(req.params.id, function(err, mh) {
    res.json(mh);
  });
};

//add mon hoc
exports.addMonHoc = (req, res) => {
  let mh = new MonHoc(req.body);
  mh.save()
    .then(mh => {
      res.status(200).json({ mh: "subject in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

//delete mon hoc
exports.deleteMonHoc = (req, res) => {
  DSHP.findOne({ idMonHoc: req.params.id }, function(err, dshp) {
    if (err) res.json(err);
    else {
      if (!dshp) {
        MonHoc.findByIdAndRemove(req.params.id, function(err, mh) {
          if (err) res.json(err);
          else res.json("Successfully removed");
        });
      } else {
        res.json("fk");
      }
    }
  });
};

//update mon hoc
exports.updateMonHoc = (req, res) => {
  MonHoc.findById(req.params.id, function(err, mh) {
    if (!mh) res.status(404).send("data is not found");
    else {
      console.log(mh);
      mh.id = req.body.id;
      mh.name = req.body.name;
      mh.description = req.body.description;
      mh.save()
        .then(mh => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};
