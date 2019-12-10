import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import api from "../../axios";
class SinhVienEditForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", name: "", gender: "", address: "", email: "", phone: "", _id: "" };
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChange_Id = this.onChange_Id.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.close = this.close.bind(this);
  }
  //---------Functions
  //-----onChange_Id
  onChange_Id(e) {
    this.setState({ _id: e.target.value });
  }
  //-----onChangeId
  onChangeId(e) {
    this.setState({ id: e.target.value });
  }
  //-----onChangeName
  onChangeName(e) {
    this.setState({ name: e.target.value });
  }
  //-----onChangeGender
  onChangeGender(e) {
    this.setState({ gender: e.target.value });
  }
  //-----onChangeAddress
  onChangeAddress(e) {
    this.setState({ address: e.target.value });
  }
  //-----onChangeEmail
  onChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  //-----onChangePhone
  onChangePhone(e) {
    this.setState({ phone: e.target.value });
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
      gender: this.state.gender,
      phone: this.state.phone,
      email: this.state.email,
      address: this.state.address
    };
    console.log(obj);
    api.put("/sinhvien/" + this.state._id, obj).then(res => console.log(res.data));
    await alert("Đã cập nhật thành công!");
    this.props.onClickClose();
    window.location.reload();
  }
  componentDidMount() {
    var item = this.props.itemUpdated;
    this.setState({
      _id: item._id,
      id: item.id,
      name: item.name,
      gender: item.gender,
      phone: item.phone,
      email: item.email,
      address: item.address
    });
  }
  render() {
    return (
      <form className="d-flex">
        <Modal show={true} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Cập nhật sinh viên</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input
              className="form-control"
              placeholder="Nhập id sinh viên..."
              required
              value={this.state.id}
              onChange={this.onChangeId}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập tên sinh viên..."
              required
              value={this.state.name}
              onChange={this.onChangeName}
            />
            <select className="form-control mt-3" required value={this.state.gender} onChange={this.onChangeGender}>
              <option value="-1">Chọn giới tính....</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
            <input
              className="form-control mt-3"
              placeholder="Nhập địa chỉ sinh viên..."
              required
              value={this.state.address}
              onChange={this.onChangeAddress}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập email sinh viên..."
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
            <input
              className="form-control mt-3"
              placeholder="Nhập số điện thoại sinh viên..."
              required
              value={this.state.phone}
              onChange={this.onChangePhone}
            />
          </Modal.Body>
          <Modal.Footer>
            <input type="submit" value="Cập nhật" className="btn btn-info" onClick={this.onSubmit} />
            <Button onClick={this.close} className="btn-danger">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </form>
    );
  }
}

export default SinhVienEditForm;
