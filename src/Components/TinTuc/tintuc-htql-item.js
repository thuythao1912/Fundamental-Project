import React, { Component } from "react";

class TinTucItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { item } = this.props;
    var string = item.url;
    var url = "";
    if (string.charAt(0) === "f") {
      url = "https://htql.ctu.edu.vn/htql/" + item.url;
    } else {
      url = item.url;
    }
    // console.log(i);

    return (
      <div className="text-justify">
        <a href={url} target="_blank">
          {item.title}
        </a>
      </div>
    );
  }
}

export default TinTucItem;
