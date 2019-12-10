import React, { Component } from "react";
import api from "../../axios";
import TableTrangChu from "./trangchu-table";
class TrangChu extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
    this.handleGet = this.handleGet.bind(this);
  }
  async componentDidMount() {
    await this.handleGet();
    console.log("cdm bb");
  }
  async handleGet() {
    api
      .get("/test")
      .then(response => {
        console.log(response.data);
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    var items = this.state.items;
    var elTable = "";
    if (items) {
      elTable = <TableTrangChu items={items} />;
    } else {
      elTable = (
        <div className="text-center">
          {/* <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated"
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "80%" }}
            ></div>
          </div> */}
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="spinner-grow" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h5>Đang tải dữ liệu, xin vui lòng đợi!</h5>
        </div>
      );
    }

    return (
      <div className="bg-white table-striped p-3">
        <h3 className="text-center">DANH SÁCH BÀI BÁO</h3>

        {elTable}
      </div>
    );
  }
}

export default TrangChu;
