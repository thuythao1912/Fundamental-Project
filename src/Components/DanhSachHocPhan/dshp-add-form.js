import React, { Component } from "react";
import api from "../../axios";
import { Modal, Button } from "react-bootstrap";
import DropdownMonHoc from "../MonHoc/Dropdown-MonHoc";
const time = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const date = [2, 3, 4, 5, 6, 7];
class DSHPAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { id: "", idMonHoc: "", time: new Set(), date: new Set() };
    this.onChangeId = this.onChangeId.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.close = this.close.bind(this);
    this.getMonHoc = this.getMonHoc.bind(this);
    this.onCheckTime = this.onCheckTime.bind(this);
    this.checkboxTime = this.checkboxTime.bind(this);
    this.onCheckDate = this.onCheckDate.bind(this);
    this.checkboxDate = this.checkboxDate.bind(this);
  }
  //---------Functions
  //-----onSubmit
  async onSubmit(e) {
    e.preventDefault();
    if (this.state.id === "") alert("Chưa nhập mã lớp học phần!");
    else {
      var time = "";
      for (const t of this.state.time) {
        time += t;
      }
      var date = "";
      for (const d of this.state.date) {
        date += d + ",";
      }

      const obj = {
        id: this.state.id,
        idMonHoc: this.state.idMonHoc,
        date,
        time
      };
      console.log(obj);
      api.post("/danhsachhocphan", obj).then(res => console.log(res.data));
      this.setState({ id: "", idMonHoc: "", time: "", date: "" });
      alert("Đã thêm thành công!");
      this.close();
      window.location.reload();
    }
  }
  //-----onChangeId
  onChangeId(e) {
    this.setState({ id: e.target.value });
  }
  //------get Mon Hoc
  getMonHoc(item) {
    // console.log(item);
    this.setState({ idMonHoc: item });
  }
  close() {
    this.props.onClickClose();
  }
  //----create checkbox time
  checkboxTime = () => {
    var checkboxTime = time.map((value, key) => {
      return (
        <div className="form-check form-check-inline" key={key}>
          <input
            className="form-check-input"
            type="checkbox"
            value={value}
            onChange={() => this.onCheckTime(value)}
            checked={this.state.time.has(value)}
          />
          <label className="form-check-label">{value}</label>
        </div>
      );
    });
    return checkboxTime;
  };
  //----onCheck
  onCheckTime = value => {
    if (this.checkedCheckboxTime.has(value)) {
      this.checkedCheckboxTime.delete(value);
    } else {
      this.checkedCheckboxTime.add(value);
    }
    this.setState({ time: this.checkedCheckboxTime });
    console.log(this.state.time);
  };
  //----create checkbox date
  checkboxDate = () => {
    var checkboxDate = date.map((value, key) => {
      return (
        <div className="form-check form-check-inline" key={key}>
          <input
            className="form-check-input"
            type="checkbox"
            value={value}
            onChange={() => this.onCheckDate(value)}
            checked={this.state.date.has(value)}
          />
          <label className="form-check-label">Thứ {value}</label>
        </div>
      );
    });
    return checkboxDate;
  };
  //----onCheck
  onCheckDate = value => {
    if (this.checkedCheckboxDate.has(value)) {
      this.checkedCheckboxDate.delete(value);
    } else {
      this.checkedCheckboxDate.add(value);
    }
    this.setState({ date: this.checkedCheckboxDate });
    console.log(this.state.date);
  };
  componentWillMount() {
    this.checkedCheckboxTime = new Set();
    this.checkedCheckboxDate = new Set();
  }

  render() {
    return (
      <form className="d-flex">
        <Modal show={this.props.isShowAddForm} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Thêm lớp học phần</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <input
              className="form-control"
              placeholder="Nhập id lớp học phần..."
              required
              value={this.state.id}
              onChange={this.onChangeId}
            />
            <DropdownMonHoc getSelectedItem={this.getMonHoc} />
            <span className="mr-2 my-3">Tiết</span>
            <div className="d-flex justify-content-between">
              {this.checkboxTime()}
            </div>
            <span className="mr-2 my-3">Thứ</span>
            <div className="d-flex justify-content-between">
              {this.checkboxDate()}
            </div>
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

export default DSHPAddForm;
