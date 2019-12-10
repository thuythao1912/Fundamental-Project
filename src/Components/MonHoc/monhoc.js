import React, { Component } from "react";
import TableMonHoc from "./monhoc-table";
import AddForm from "./monhoc-add";
import api from "../../axios";
import MonHocEditForm from "./monhoc-edit-form";
class MonHoc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isShowEditForm: false,
      itemUpdated: null,
      updated: false
    };
    this.handleGet = this.handleGet.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  //Routes
  async componentDidMount() {
    await this.handleGet();
    console.log("cdm mh");
  }

  //Function
  handleGet() {
    api
      .get("/monhoc")
      .then(response => {
        // console.log(response.data);
        this.setState({ items: response.data });
        console.log("get monhoc done");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  async handleDelete(id, _id) {
    // console.log(id + "---" + _id);
    if (window.confirm("Bạn muốn xóa môn học id: " + id + "?")) {
      await api
        .delete("/monhoc/" + _id)
        .then(response => {
          if (response.data == "fk") {
            alert("Vui lòng xóa dữ liệu bên bảng học phần trước");
          } else {
            alert("Đã xóa thành công!");
          }
        })
        .catch(err => console.log(err));
      await this.handleGet();
    }
  }

  handleEdit(item) {
    // console.log(item);
    this.setState({ isShowEditForm: true, itemUpdated: item });
  }
  handleClose() {
    this.setState({ isShowEditForm: false });
  }

  render() {
    var items = this.state.items;
    var isShowEditForm = this.state.isShowEditForm;
    var elShowEditForm = "";
    if (isShowEditForm) {
      elShowEditForm = (
        <MonHocEditForm
          onClickClose={this.handleClose}
          itemUpdated={this.state.itemUpdated}
          isShowEditForm={this.state.isShowEditForm}
        />
      );
    }
    return (
      <div
        className="bg-white table-striped p-3"
        style={{ minHeight: "100vh" }}
      >
        <h3 className="text-center">DANH SÁCH MÔN HỌC</h3>
        <AddForm />
        {elShowEditForm}
        <TableMonHoc
          items={items}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default MonHoc;
