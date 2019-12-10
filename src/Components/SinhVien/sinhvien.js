import React, { Component } from "react";
import TableSinhVien from "./sinhvien-table";
import AddForm from "./sinhvien-add";
import api from "../../axios";
import SinhVienEditForm from "./sinhvien-edit-form";
// import { fakeAuth } from "../../Context/auth";

class SinhVien extends Component {
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

  async componentDidMount() {
    await this.handleGet();
    console.log("cdm sv");
  }

  //Function
  handleGet() {
    api
      .get("/sinhvien")
      .then(response => {
        // console.log(response.data);
        this.setState({ items: response.data });
        console.log("get sinhvien done");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  async handleDelete(id, _id) {
    // console.log(id + "---" + _id);
    if (window.confirm(`Bạn muốn xóa sinh viên id: ${id} ? `)) {
      await api
        .delete("/sinhvien/" + _id)
        .then(console.log("Deleted"))
        .catch(err => console.log(err));
      await this.handleGet();
      await console.log(this.state.items);
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
        <SinhVienEditForm
          onClickClose={this.handleClose}
          itemUpdated={this.state.itemUpdated}
          isShowEditForm={this.state.isShowEditForm}
        />
      );
    }
    // this.handleGet();
    return (
      <div
        className="bg-white table-striped p-3"
        style={{ minHeight: "100vh" }}
      >
        <h3 className="text-center">DANH SÁCH SINH VIÊN</h3>
        <AddForm />
        {elShowEditForm}
        <TableSinhVien
          items={items}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default SinhVien;
