import React, { Component } from "react";

class TinTucItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { item } = this.props;
    var { index } = this.props;
    console.log(item);
    var url = "https://giaoduc.net.vn/" + item.url;

    return (
      <div className="d-flex my-3">
        <div className="col-sm-3">
          <img src={item.image} width="80px" />
        </div>
        <div className="col-sm-9 text-justify">
          <a href={url} target="_blank">
            {item.title}
          </a>
        </div>
      </div>
    );
  }
}

export default TinTucItem;
