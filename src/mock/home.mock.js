import Mock from "mockjs";

Mock.mock("/api/home/list", {
  "data|10": [
    {
      "id|+1": 1,
      name: "炸雞漢堡",
      star: 5,
      price: "1.5",
      time: "34 分鐘",
      img: "http://my.yjbys.com/uploads/company/logo/7484461.jpg"
    }
  ],
  errCode: "0",
  errMsg: "成功",
  totalCount: 10
});

export default Mock;
