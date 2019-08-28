import React, { Component } from "react";
import { List, Card, Rate } from "antd";
import "./GoodsCardList.less";

const { Item } = List;

class GoodsCardList extends Component {
  renderItem = ({ img, name, star, price, time }) => {
    return (
      <Item className="itemContainer">
        <Card className="card">
          <img src={img} alt="" className="cardImg" />
          <div className="cardContent">
            <h3 className="title">{name || "-"}</h3>
            <Rate disabled defaultValue={star || 0} style={{ fontSize: 14 }} />
            <br />
            <span>{`配送費  ¥${price || "-"}`}</span>
            <br />
            <span>{`配送时间  ${time || "-"} 分钟`}</span>
          </div>
        </Card>
      </Item>
    );
  };

  render() {
    const { data = [] } = this.props;
    return (
      <div className="root">
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => this.renderItem(item)}
        />
      </div>
    );
  }
}

export default GoodsCardList;
