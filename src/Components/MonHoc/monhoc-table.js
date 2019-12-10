import React, { Component } from "react";
import MonHocItem from "./monhoc-item";

class TableMonHoc extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props.items);
    var items = this.props.items;
    var elItem = items.map((item, index) => {
      return (
        <MonHocItem
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
            <td>Mã môn học</td>
            <td>Tên môn học</td>
            <td>Mô tả</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>{elItem}</tbody>
      </table>
    );
  }
}

export default TableMonHoc;
