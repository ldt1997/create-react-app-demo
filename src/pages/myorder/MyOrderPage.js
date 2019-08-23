import React, { Component } from "react";
import { List, Avatar } from "antd";
import { connect } from "react-redux";
import "./MyOrderPage.less";

@connect(
  state => ({ myOrderData: state.myOrder }),
  null
)
class MyOrderPage extends Component {
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
  };
  render() {
    const { myOrderData: { list = [] } = {} } = this.props;
    return (
      <div className="root">
        <div className="list">
          <List
            itemLayout="horizontal"
            dataSource={list}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
}

export default MyOrderPage;
