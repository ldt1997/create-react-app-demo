import React, { Component } from "react";
import { Input, Button } from "antd";
import GoodsCardList from "./components/GoodsCardList";
import { connect } from "react-redux";
import "./HomePage.less";

const { Search } = Input;

@connect(
  state => ({ homeData: state.home }),
  null
)
class HomePage extends Component {
  state = {
    query: {}
  };

  componentDidMount() {
    this.init();
  }

  init = () => {
    const params = {};
    const { dispatch } = this.props;
    dispatch({
      type: "GET_LIST",
      payload: params
    });
    dispatch({
      type: "GET_TABS"
    });
  };

  renderTab = tabs => {
    return tabs.map(item => (
      <Button
        key={item}
        style={{ margin: "20px 10px" }}
        type="link"
        onClick={this.handleTabChange}
      >
        {item}
      </Button>
    ));
  };

  render() {
    const { homeData: { tabsList = [], list = [] } = {} } = this.props;
    return (
      <div className="root" style={{ background: "#f7f7f7" }}>
        <div className="search">
          <Search
            placeholder="搜索商家、美食..."
            onSearch={value => console.log(value)}
            style={{ width: 240 }}
          />
        </div>
        <div className="tabContainer">
          <div className="tabTitle">
            <span>商家分類：</span>
          </div>
          <div className="tabs">{this.renderTab(tabsList)}</div>
        </div>
        <div className="list">
          <GoodsCardList data={list} />
        </div>
      </div>
    );
  }
}

export default HomePage;
