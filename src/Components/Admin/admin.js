import React, { Component } from "react";
import TableAdmin from "./admin-table";
import AddForm from "./admin-add";
import api from "../../axios";
import AdminEditForm from "./admin-edit-form";
class Admin extends Component {
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
      .get("/admin")
      .then(response => {
        // console.log(response.data);
        this.setState({ items: response.data });
        console.log("get Admin done");
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  async handleDelete(id, _id) {
    // console.log(id + "---" + _id);
    if (window.confirm("Bạn muốn xóa admin id: " + id + "?")) {
      await api
        .delete("/Admin/" + _id)
        .then(console.log("Deleted"))
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
        <AdminEditForm
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
        <h3 className="text-center">DANH SÁCH TÀI KHOẢN ADMIN</h3>
        <AddForm />
        {elShowEditForm}
        <TableAdmin
          items={items}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default Admin;
