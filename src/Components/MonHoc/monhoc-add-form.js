import React, { Component } from "react";
import api from "../../axios";
import { Modal, Button } from "react-bootstrap";
class MonHocAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", description: "" };
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.close = this.close.bind(this);
  }
  //---------Functions
  //-----onSubmit
  async onSubmit(e) {
    e.preventDefault();
    if (this.state.id === "") alert("Chưa nhập mã môn học!");
    else {
      const obj = {
        id: this.state.id,
        name: this.state.name,
        description: this.state.description
      };
      api.post("/monhoc", obj).then(res => console.log(res.data));
      this.setState({ id: "", name: "", description: "" });
      alert("Đã thêm thành công!");
      this.close();
      window.location.reload();
    }
  }
  //-----onChangeId
  onChangeId(e) {
    this.setState({ id: e.target.value });
  }
  //-----onChangeName
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  //-----onChangeDescription
  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }
  close() {
    this.props.onClickClose();
  }

  render() {
    return (
      <form className="d-flex">
        <Modal show={this.props.isShowAddForm} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm môn học</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input
              className="form-control"
              placeholder="Nhập id môn học..."
              required
              value={this.state.id}
              onChange={this.onChangeId}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập tên môn học..."
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <textarea
              className="form-control mt-3"
              placeholder="Nhập mô tả môn học..."
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            ></textarea>
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" value="Thêm" className="btn btn-info" onClick={this.onSubmit} />
            <Button onClick={this.close} className="btn-danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default MonHocAddForm;
