import React, { Component } from "react";
import api from "../../axios";
import TableTinTuc from "./tintuc-ctu-table";
class TinTucCTU extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
    this.handleGet = this.handleGet.bind(this);
  }
  async componentDidMount() {
    await this.handleGet();
    // console.log("cdm bb");
  }
  handleGet() {
    api
      .get("/tintuc/ctu")
      .then(response => {
        // console.log(response.data);
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
      elTable = <TableTinTuc items={items} />;
    } else {
      elTable = (
        <div className="text-center">
          <div
            className="spinner-grow spinner-grow-sm mx-3 text-info"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            className="spinner-grow spinner-grow-sm mx-3 text-info"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            className="spinner-grow spinner-grow-sm mx-3 text-info"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h5>Đang tải dữ liệu, xin vui lòng đợi!</h5>
        </div>
      );
    }

    return (
      <div className="bg-white border p-3">
        <h5 className="text-center">Tin tức từ CTU</h5>
        {elTable}
      </div>
    );
  }
}

export default TinTucCTU;
