import React, { Component } from "react";
import api from "../../axios";
class DropdownMonHoc extends Component {
  constructor(props) {
    super(props);
    this.state = { monhoc: [] };
    this.getSelectedItem = this.getSelectedItem.bind(this);
  }
  //Funtions
  componentDidMount() {
    api
      .get("/monhoc")
      .then(response => {
        console.log(response.data);
        this.setState({ monhoc: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  getSelectedItem() {
    this.props.getSelectedItem(this.refs.MonHoc.value);
    // console.log(this.refs.MonHoc.value);
  }

  render() {
    var MonHoc = this.state.monhoc;
    if (MonHoc) {
      var selectItem = MonHoc.map((item, index) => {
        return (
          <option value={item._id} key={index}>
            {item.name}
          </option>
        );
      });
      return (
        <select
          id="slMonHoc"
          className="form-control my-3"
          onChange={e => {
            this.getSelectedItem();
          }}
          ref="MonHoc"
        >
          <option value="-1">Chọn môn học</option>
          {selectItem};
        </select>
      );
    }
  }
}
export default DropdownMonHoc;
