import React, { Component } from "react";
import { List, Card, Rate } from "antd";
import "./GoodsCardList.less";

const { Item } = List;

class GoodsCardList extends Component {
  render() {
    const { data = [] } = this.props;
    return (
      <div className="root">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <Item className="itemContainer">
              <Card className="card">
                <img
                  src="http://my.yjbys.com/uploads/company/logo/7484461.jpg"
                  alt=""
                  className="img"
                />
                <div className="cardContent">
                  <h3>{item.title}</h3>
                  <p>
                    <Rate
                      disabled
                      defaultValue={item.star}
                      style={{ fontSize: 14 }}
                    />
                  </p>
                  <p>{`配送費  ¥${item.price}`}</p>
                  <p>{`配送时间  ${item.time} 分钟`}</p>
                </div>
              </Card>
            </Item>
          )}
        />
      </div>
    );
  }
}

export default GoodsCardList;
