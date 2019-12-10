import React, { Component } from "react";
import DSHPItem from "./dshp-item";

class TableDSHP extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props.items);
    var items = this.props.items;
    var elItem = items.map((item, index) => {
      return (
        <DSHPItem
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
            <td>Mã lớp học phần</td>
            <td>Tên môn học</td>
            <td>Tiết</td>
            <td>Thứ</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>{elItem}</tbody>
      </table>
    );
  }
}

export default TableDSHP;
