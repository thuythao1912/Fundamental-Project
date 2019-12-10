import React, { Component } from "react";
import api from "../../axios";
class DSHPItem extends Component {
  constructor(props) {
    super(props);
    this.state = { monhocName: "" };
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
  componentDidMount() {
    // console.log(this.props.item.idMonHoc);
    api
      .get("/monhoc/" + this.props.item.idMonHoc)
      .then(response => {
        // console.log(response.data);
        this.setState({ monhocName: response.data.name });
        // console.log("get DSHP done");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    var { item } = this.props;
    var { index } = this.props;
    var monhocName = this.state.monhocName;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.id}</td>
        <td>{monhocName}</td>
        <td>{item.time}</td>
        <td>{item.date}</td>
        <td>
          <button
            className="btn btn-info mr-3 btn-sm"
            onClick={() => this.handleEdit(item)}
          >
            Sửa
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.handleDelete(item.id, item._id)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default DSHPItem;
