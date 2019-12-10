import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import SinhVien from "./Components/SinhVien/sinhvien";
import MonHoc from "./Components/MonHoc/monhoc";
import TrangChu from "./Components/TrangChu/trangchu";
import PrivateRoute from "./Components/PrivateRoute/private-route";
import AuthHeader from "./Components/AuthHeadFoot/auth-header";
import AuthFooter from "./Components/AuthHeadFoot/auth-footer";
import Admin from "./Components/Admin/admin";
import TinTuc from "./Components/TinTuc/tintuc";
import DSHP from "./Components/DanhSachHocPhan/dshp";
import Today from "./Components/SinhVien/test";
function App() {
  return (
    <Router>
      <div>
        <AuthHeader />
        <PrivateRoute exact path="/" component={TinTuc} />
        <PrivateRoute exact path="/danhsach/sinhvien" component={SinhVien} />
        <PrivateRoute exact path="/danhsach/monhoc" component={MonHoc} />
        <PrivateRoute exact path="/danhsach/admin" component={Admin} />
        <PrivateRoute exact path="/hocphan/danhsach" component={DSHP} />
        <Route exact path="/login" component={Login} />
        <AuthFooter />
      </div>
      {/* <Today /> */}
    </Router>
  );
}

export default App;
