import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import BaseLayout from "./components/layouts/BaseLayout";
import App from "./pages/app/App";
import HomePage from "./pages/home/HomePage";
import MyOrderPage from "./pages/myorder/MyOrderPage";

class Router extends Component {
  renderRouter = () => (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/myorder" component={MyOrderPage} />
      <Route exact path="/service" component={App} />
    </Switch>
  );
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <BaseLayout>{this.renderRouter()}</BaseLayout>
        </HashRouter>
      </ConfigProvider>
    );
  }
}

export default Router;
