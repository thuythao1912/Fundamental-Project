import React, { Component } from "react";
// import sv from "../Data/sinhvien";
// import axios from "axios";

import SinhVienItem from "./sinhvien-item";

class TableSinhVien extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props.items);
    var items = this.props.items;
    var elItem = items.map((item, index) => {
      return (
        <SinhVienItem
          key={index}
          item={item}
          index={index}
          onClickDelete={this.props.onClickDelete}
          onClickEdit={this.props.onClickEdit}
        />
      );
    });
    return (
      <table className="table">
        <thead>
          <tr>
            <td>STT</td>
            <td>MSSV</td>
            <td>Họ tên</td>
            <td>Giới tính</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Điện thoại</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>{elItem}</tbody>
      </table>
    );
  }
}

export default TableSinhVien;
