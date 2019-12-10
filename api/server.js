// server.js
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./db");

//routes
const sinhvienRoute = require("./routes/sinhvien-routes");
const monhocRoute = require("./routes/monhoc-routes");
const adminRoute = require("./routes/admin-routes");
const tintucRoute = require("./routes/tintuc-routes");
const danhsachhocphanRoute = require("./routes/danhsachhocphan-routes");
//connect db
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});

//routes
app.use("/sinhvien", sinhvienRoute);
app.use("/monhoc", monhocRoute);
app.use("/admin", adminRoute);
app.use("/tintuc", tintucRoute);
app.use("/danhsachhocphan", danhsachhocphanRoute);

// //passport
// passport = require("./controllers/passport-controller").getPassport();
// app.use(passport.initialize());
// app.use(passport.session());
