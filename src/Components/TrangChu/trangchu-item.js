import React, { Component } from "react";

class TrangChuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { item } = this.props;
    var { index } = this.props;
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item.title}</td>
        <td>
          <a href={item.url} target="_blank">
            {item.url}
          </a>
        </td>
      </tr>
    );
  }
}

export default TrangChuItem;
