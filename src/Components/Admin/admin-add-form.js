import React, { Component } from "react";
import api from "../../axios";
import { Modal, Button } from "react-bootstrap";
class AdminAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", username: "", password: "" };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.close = this.close.bind(this);
  }
  //---------Functions
  //-----onSubmit
  async onSubmit(e) {
    e.preventDefault();
    if (this.state.id === "") alert("Chưa nhập mã admin!");
    else {
      const obj = {
        id: this.state.id,
        name: this.state.name,
        username: this.state.username,
        password: this.state.password
      };
      api.post("/admin", obj).then(res => console.log(res.data));
      this.setState({
        id: "",
        name: "",
        username: "",
        password: ""
      });
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
  //-----onChangeUsername
  onChangeUsername(e) {
    this.setState({ username: e.target.value });
  }
  //-----onChangePassword
  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  close() {
    this.props.onClickClose();
  }

  render() {
    return (
      <form className="d-flex">
        <Modal show={this.props.isShowAddForm} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm admin</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input
              className="form-control"
              placeholder="Nhập id admin..."
              required
              value={this.state.id}
              onChange={this.onChangeId}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập tên admin..."
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập username..."
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập password..."
              required
              value={this.state.password}
              onChange={this.onChangePassword}
              type="password"
            />
          </Modal.Body>
          <Modal.Footer>
            <input
              type="submit"
              value="Thêm"
              className="btn btn-info"
              onClick={this.onSubmit}
            />
            <Button onClick={this.close} className="btn-danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default AdminAddForm;
