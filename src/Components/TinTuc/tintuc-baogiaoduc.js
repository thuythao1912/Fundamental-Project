import React, { Component } from "react";
import api from "../../axios";
import TinTucItem from "./tintuc-baogiaoduc-item";
class TinTucBaoGiaoDuc extends Component {
  constructor(props) {
    super(props);
    this.state = { item: [] };
    this.handleGet = this.handleGet.bind(this);
  }
  async componentDidMount() {
    await this.handleGet();
  }
  handleGet() {
    api
      .get("/tintuc/baogiaoduc")
      .then(response => {
        this.setState({ items: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    var items = this.state.items;
    //console.log(items);
    var elTinTuc = "";
    if (items) {
      var elTinTuc = items.map((item, index) => {
        return <TinTucItem key={index} item={item} index={index} />;
      });
    } else {
      elTinTuc = (
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
        <h5 className="text-center">Tin tức từ Báo giáo dục</h5>
        {elTinTuc}
      </div>
    );
  }
}

export default TinTucBaoGiaoDuc;
