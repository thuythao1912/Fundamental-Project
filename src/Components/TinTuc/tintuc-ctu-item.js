import React, { Component } from "react";

class TinTucItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { item } = this.props;
    var { index } = this.props;
    var url = "https://www.ctu.edu.vn/" + item.url;

    return (
      <div className="text-justify text-dark">
        {index + 1}.{" "}
        <a href={url} target="_blank">
          {item.title}
        </a>
      </div>
    );
  }
}

export default TinTucItem;
