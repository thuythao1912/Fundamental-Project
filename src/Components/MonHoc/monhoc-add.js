import React, { Component } from "react";
import MonHocAddForm from "./monhoc-add-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowAddForm: false };
    this.handleAddForm = this.handleAddForm.bind(this);
  }
  //---------Functions
  handleAddForm() {
    this.setState({ isShowAddForm: !this.state.isShowAddForm });
    console.log(this.state.isShowAddForm);
  }

  render() {
    var isShowAddForm = this.state.isShowAddForm;
    var elAddForm = null;
    if (isShowAddForm) {
      elAddForm = <MonHocAddForm isShowAddForm={this.state.isShowAddForm} onClickClose={this.handleAddForm} />;
    }
    return (
      <div>
        <button className="btn btn-success mb-3" onClick={this.handleAddForm}>
          <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
          Thêm
        </button>
        {elAddForm}
      </div>
    );
  }
}

export default AddForm;
