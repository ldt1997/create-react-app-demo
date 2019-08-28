import React, { Component } from "react";
import { Button } from "antd";
import "./TabList.less";

class TabList extends Component {
  renderTab = tabs => {
    const { handleTabSearch } = this.props;
    return tabs.map(item => (
      <Button
        key={item.id}
        style={{ margin: "20px 10px" }}
        type="link"
        onClick={() => handleTabSearch(item.id)}
      >
        {item.name}
      </Button>
    ));
  };

  render() {
    const { data = [] } = this.props;
    return (
      <div className="root">
        <div className="tabTitle">
          <span>商家分類：</span>
        </div>
        <div className="tabs">{this.renderTab(data)}</div>
      </div>
    );
  }
}

export default TabList;
