import React, { Component } from "react";
import TinTucHTQL from "./tintuc-htql";
import TinTucCTU from "./tintuc-ctu";
import TinTucBaoGiaoDuc from "./tintuc-baogiaoduc";
class TinTuc extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-3" style={{ minHeight: "100vh" }}>
        <h3 className="text-center">DANH SÁCH BÀI BÁO</h3>
        <div className="d-flex justify-content-between">
          <div className="col-sm-4 ">
            <TinTucHTQL />
          </div>
          <div className="col-sm-4">
            <TinTucCTU />
          </div>
          <div className="col-sm-4">
            <TinTucBaoGiaoDuc />
          </div>
        </div>
      </div>
    );
  }
}

export default TinTuc;
