import React, { Component } from "react";
import TableDSHP from "./dshp-table";
import AddForm from "./dshp-add";
import api from "../../axios";
import DSHPEditForm from "./dshp-edit-form";
class DSHP extends Component {
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
  }

  //Function
  handleGet() {
    api
      .get("/danhsachhocphan")
      .then(response => {
        console.log(response.data);
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  async handleDelete(id, _id) {
    if (window.confirm("Bạn muốn xóa môn học id: " + id + "?")) {
      await api
        .delete("/danhsachhocphan/" + _id)
        .then(console.log("Deleted"))
        .catch(err => console.log(err));
      await this.handleGet();
    }
  }

  handleEdit(item) {
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
        <DSHPEditForm
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
        <h3 className="text-center">DANH SÁCH LỚP HỌC PHẦN</h3>
        <AddForm />
        {elShowEditForm}
        <TableDSHP
          items={items}
          onClickDelete={this.handleDelete}
          onClickEdit={this.handleEdit}
        />
      </div>
    );
  }
}

export default DSHP;
