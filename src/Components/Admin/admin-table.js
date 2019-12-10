import React, { Component } from "react";
import AdminItem from "./admin-item";

class TableAdmin extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    // console.log(this.props.items);
    var items = this.props.items;
    var elItem = items.map((item, index) => {
      return (
        <AdminItem
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
            <td>Mã số admin</td>
            <td>Họ tên</td>
            <td>Username</td>
            <td>Thao tác</td>
          </tr>
        </thead>
        <tbody>{elItem}</tbody>
      </table>
    );
  }
}

export default TableAdmin;
