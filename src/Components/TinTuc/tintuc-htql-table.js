import React, { Component } from "react";
import TinTucItem from "./tintuc-htql-item";

class TableTrangChu extends Component {
  render() {
    var items = this.props.items;
    var elItem = items.map((item, index) => {
      return <TinTucItem key={index} item={item} index={index} />;
    });

    return (
      <div className="">
        <div>{elItem}</div>
      </div>
    );
  }
}

export default TableTrangChu;
