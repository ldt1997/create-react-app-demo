import React, { Component } from "react";
import { Input, Button } from "antd";
import TabList from "./components/TabList";
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
    const { dispatch } = this.props;
    this.updateTable();
    dispatch({
      type: "FETCH_TAB"
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

  handleSearch = val => {
    const params = {
      keyword: val
    };
    this.updateTable(params);
  };

  handleTabSearch = val => {
    const params = {
      tab: val
    };
    this.updateTable(params);
  };

  updateTable = params => {
    const { dispatch } = this.props;
    dispatch({
      type: "FETCH_LIST",
      payload: params
    });
  };

  render() {
    const { homeData: { tabList = [], list = [] } = {} } = this.props;
    return (
      <div className="root" style={{ background: "#f7f7f7" }}>
        <div className="search">
          <Search
            placeholder="搜索商家、美食..."
            onSearch={val => this.handleSearch(val)}
            style={{ width: 240 }}
          />
        </div>
        <div className="tabContainer">
          <TabList data={tabList} handleTabSearch={this.handleTabSearch} />
        </div>
        <div className="list">
          <GoodsCardList data={list} />
        </div>
      </div>
    );
  }
}

export default HomePage;
