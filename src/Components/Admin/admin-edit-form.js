import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import api from "../../axios";
class AdminEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", username: "", password: "", _id: "" };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.close = this.close.bind(this);
  }
  //---------Functions
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
  close() {
    this.props.onClickClose();
  }
  //-----onSubmit
  async onSubmit(e) {
    e.preventDefault();
    const obj = {
      id: this.state.id,
      name: this.state.name,
      username: this.state.username
    };
    api.put("/admin/" + this.state._id, obj).then(res => console.log(res.data));
    await alert("Đã cập nhật thành công!");
    this.props.onClickClose();
    window.location.reload();
  }
  componentDidMount() {
    var item = this.props.itemUpdated;
    console.log(item._id);
    this.setState({
      _id: item._id,
      id: item.id,
      name: item.name,
      username: item.username
    });
  }
  render() {
    return (
      <form className="d-flex">
        <Modal show={true} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Cập nhật admin</Modal.Title>
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
          </Modal.Body>
          <Modal.Footer>
            <input
              type="submit"
              value="Cập nhật"
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

export default AdminEditForm;
