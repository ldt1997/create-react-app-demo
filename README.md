# React 技术栈及 AntdDesign 组件的使用

1.掌握 React 技术栈（React,React-Router,Redux）；

2.掌握 AntdDesign 组件的使用；

3.使用`create-react-app`创建一个练习项目，输出一个页面，技术包含以上内容，并做一些 webpack 配置进行修改。

**运行环境**：macOX

#### 项目安装

---

```js
$ npm install
```

#### 项目启动

---

```js
$ npm start
```

#### 项目结构

---

```js
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── components // 公共组件
│   ├── mock       // mock数据
│   ├── pages      // 容器组件
│   │   ├── demo      // 业务容器
│   │   │   ├── demo.jsx      // 业务容器入口
│   │   │   ├── demo.less      // 业务容器样式
│   │   │   ├── service     // 业务api目录
│   │   │   ├── modules      // 业务model目录
│   │   │   │   ├── saga.js     // saga配置
│   │   │   │   ├── reducer.js     // reducer配置
│   ├── router.js  // router配置
│   ├── store.js // redux store配置
│   ├── index.js // 入口文件
└── yarn.lock
```

#### 开发过程

---

##### 1.按照 antd 文檔搭建 create-react-app 框架

> 参考：[在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn)

```js
$ yarn create react-app antd-demo

$ yarn add antd
```

##### 2.添加 less 支持

暴露 webpack 配置

```js
$ npm run eject
```

添加 less 正则

```js
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
+ const lessRegex = /\.less$/;
+ const lessModuleRegex = /\.module\.less$/;
```

添加 less 配置

```js
{
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  sourceMap: isEnvProduction && shouldUseSourceMap
                },
                "less-loader"
              )
            },
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 1,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent
                },
                "less-loader"
              )
            },
```

安装依赖

```js
npm install less less-loader --save
```

##### 3.安裝 react-router&react-router-dom，配置 Babel 裝飾器寫法，配置 layout 和 router.js

使用 react-router，搭配 antd 的`layout`组件实现页面间跳转。

1.安装 react-router、react-router-dom

```js
npm install react-router-dom --save-dev
```

2.配置装饰器写法

安装 babel-plugin-transform-decorators-legacy

```js
yarn add babel-plugin-transform-decorators-legacy
```

在最外层目录新建.babelrc 文件，添加配置：

```js
{
  "plugins": ["transform-decorators-legacy"]
}
```

配置了之后，可以用`@withRouter`的写法包裹在 BaseLayout.js 外面，把路由相关的方法通过 props 传给它包裹的组件的 props 上。

3.在 router.js 里配置相关路由，引入对应页面

```js
// router.js
...
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

```

##### 4.首頁靜態頁面搭建

使用 antd 组件，参考 eleme 首页搭建。

##### 5.構造 mockjs 接口

使用 mockjs 模拟接口数据，拦截 fetch 请求，并返回对应的模拟数据。

1.安装 mockjs

```js
yarn add mockjs
```

2.在 home.mock.js 中添加配置

```js
import Mock from "mockjs";

export default [
  Mock.mock("/api/home/list", "post", {
    "data|10": [
      {
        "id|+1": 1,
        "name|1": ["炸鸡汉堡", "东北饺子", "麦当劳", "酸菜鱼"],
        "star|1-5": 5,
        "price|1-5": 1.5,
        "time|10-40": 34,
        img: Mock.Random.dataImage("250x250")
      }
    ],
    errCode: 0,
    errMsg: "成功",
    totalCount: 10
  })
];
```

##### 6.用 redux 搭建中间数据层

平常项目里开发都是使用`dvajs`，对 redux 并不是很熟悉，所以尝试用了一下原生的 redux。（因为涉及到异步发送网络请求，所以后面又引入了 redux-saga 中间件。）

由于 dvajs 封装了 redux 和 redux-saga，理解 redux 难度不大，dispatch、action、reducer 和 store 的概念相同。

1.存储状态的地方——store

> store 存在于顶层组件，类似于全局变量、静态变量、本地存储的概念，意思是：状态树存在这个地方，欢迎所有组件随时访问；我们使用 createStore 来创建 store，用 combineReducers 来把多个 store 整合在一起；

store 相当于存储了整个项目需要组件通信的数据的仓库，存放在 store 里的数据可以被任意组件取用。与 dva 相比，原生 redux 多了 store.js 来生成全局的 store。createStore 和 combineReducers 用法如下：

```js
// store.js

import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import home from "./pages/home/model/reducer";
import homeSaga from "./pages/home/model/sagas";
import myOrder from "./pages/myorder/model/reducer";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware(); // 创建saga
const store = createStore(
  combineReducers({ home, myOrder }), // 使用combineReducers整合store
  applyMiddleware(sagaMiddleware) // 添加saga中间件
);

// then run the saga
sagaMiddleware.run(homeSaga);

export default store;
```

2.改变状态树的方法——dispatch & action & reducer

> action 是行为的抽象；它是一个普通的 js 对象；由方法生成；必须有一个 type；
>
> reducer 是响应的抽象；传入的参数是当前 state 和 action；它是一个纯方法；传入旧的 state 和 action，返回一个新的状态；
>
> dispatch 是动作的执行，类似于“投”篮的这个动作。

我的理解：全局的 state 是 store 当时的状态，它只能被 reducer 更新。当用户在页面发出行为时，使用 dispatch 触发一个 action，reducer 根据 action 的类型，修改相应的 store 中数据，并返回一个新的 state，从而实现数据的单向流动。

与 dva 不同，这里我每个业务容器的 models 层分了 action（sagas）和 reducer 两个文件分别管理 action 和 reducer。

##### 7.使用 redux-saga 管理异步操作，发送网络请求获取 mock 数据

> `redux-saga` 是一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的 library，它的目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易。

```js
// sagas.js

import { call, put, takeEvery } from "redux-saga/effects";
import { fetchList } from "../service/home"; //api请求

function* getList(payload) {
  const {
    data: { data, errCode }
  } = yield call(fetchList, payload);
  if (errCode === 0) {
    yield put({ type: "FETCH_LIST_SUCCESS", payload: data });
  }
}

/*
  在每个 `FETCH_LIST` action 被 dispatch 时调用 getList
  允许并发（译注：即同时处理多个相同的 action）
*/
function* homeSaga() {
  yield takeEvery("FETCH_LIST", getList);
}

/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `FETCH_LIST` action 时，
  如果在这之前已经有一个 `FETCH_LIST` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
// function* homeSaga() {
//  yield takeLatest("FETCH_LIST", getList);
// }

export default homeSaga;
```
