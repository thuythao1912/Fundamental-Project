import React, { Component } from "react";
import SinhVien from "../SinhVien/sinhvien";
import MonHoc from "../MonHoc/monhoc";
import TrangChu from "../TrangChu/trangchu";
// import Login from "../Login/login";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import PrivateRoute from "../PrivateRoute/private-route";

class RouterURL extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <PrivateRoute exact path="/" component={TrangChu} />
        <PrivateRoute exact path="/sinhvien" component={SinhVien} />
        <PrivateRoute exact path="/monhoc" component={MonHoc} />
        <Footer />
      </div>
    );
  }
}

export default RouterURL;
