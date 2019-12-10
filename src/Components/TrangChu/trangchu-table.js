import React, { Component } from "react";
// import sv from "../Data/sinhvien";
// import axios from "axios";

import TrangChuItem from "./trangchu-item";

class TableTrangChu extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    var items = this.props.items;
    // console.log(items);
    var elItem = items.map((item, index) => {
      return <TrangChuItem key={index} item={item} index={index} />;
    });
    // console.log("render tble");
    return (
      <table className="table">
        <thead>
          <tr>
            <td>STT</td>
            <td>Tựa</td>
            <td>Link</td>
          </tr>
        </thead>
        <tbody>{elItem}</tbody>
      </table>
    );
  }
}

export default TableTrangChu;
