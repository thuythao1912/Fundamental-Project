import React, { Component } from "react";
class MonHocItem extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  //---------------Functions
  //Delete Student
  handleDelete(id, _id) {
    this.props.onClickDelete(id, _id);
  }
  handleEdit(item) {
    this.props.onClickEdit(item);
    // console.log(item);
  }

  render() {
    var { item } = this.props;
    var { index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.description}</td>
        <td>
          <button className="btn btn-info mr-3 btn-sm" onClick={() => this.handleEdit(item)}>
            Sửa
          </button>
          <button className="btn btn-danger btn-sm" onClick={() => this.handleDelete(item.id, item._id)}>
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default MonHocItem;
