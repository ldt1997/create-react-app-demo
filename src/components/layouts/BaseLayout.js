import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu, ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./BaseLayout.less";

const { Header, Content, Footer } = Layout;

@withRouter
class BaseLayout extends Component {
  renderMenu = data =>
    data.map(({ name, key, url }) => (
      <Menu.Item key={key}>
        <Link to={`/${url}`}>
          <span>{name}</span>
        </Link>
      </Menu.Item>
    ));

  render() {
    const data = [
      {
        name: "首页",
        key: "sy",
        url: ""
      },
      {
        name: "我的订单",
        key: "wddd",
        url: "myorder"
      },
      {
        name: "加盟合作",
        key: "jmhz",
        url: "cooperation"
      },
      {
        name: "我的客服",
        key: "wdkf",
        url: "service"
      }
    ];

    return (
      <div className="root">
        <ConfigProvider locale={zhCN}>
          <Layout className="layout">
            <Header className="header">
              <div className="logo" />
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[""]}
                className="menu"
              >
                {this.renderMenu(data)}
              </Menu>
            </Header>
            <Content className="content">{this.props.children}</Content>
            <Footer style={{ textAlign: "center" }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout>
        </ConfigProvider>
      </div>
    );
  }
}

export default BaseLayout;
