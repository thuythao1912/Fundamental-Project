const Admin = require("../models/admin-model");

//get List Admin
exports.getListAdmin = (req, res) => {
  Admin.find(function(err, ad) {
    if (err) {
      console.log(err);
    } else {
      res.json(ad);
    }
  });
};

//add Admin
exports.addAdmin = (req, res) => {
  let ad = new Admin(req.body);
  ad.save()
    .then(ad => {
      res.status(200).json({ ad: "admin in added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};

//delete Admin
exports.deleteAdmin = (req, res) => {
  Admin.findByIdAndRemove(req.params.id, function(err, ad) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
};

//update Admin
exports.updateAdmin = (req, res) => {
  Admin.findById(req.params.id, function(err, ad) {
    if (!ad) res.status(404).send("data is not found");
    else {
      console.log(ad);
      ad.username = req.body.username;
      ad.name = req.body.name;
      ad.id = req.body.id;
      ad.save()
        .then(ad => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
};

//
exports.checkAdmin = (req, res) => {
  username = req.body.username;
  password = req.body.password;
  Admin.findOne({ username: username, password: password }, function(err, ad) {
    if (!ad) res.json("admin not found");
    else {
      res.json(ad);
    }
  });
};
