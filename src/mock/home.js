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
  }),
  Mock.mock("/api/home/tab", "get", {
    "data|10": [
      {
        "id|+1": 1,
        "name|1": [
          "超市便利",
          "蔬菜水果",
          "甜点饮品",
          "汉堡披萨",
          "异国料理",
          "浪漫鲜花"
        ]
      }
    ],
    errCode: 0,
    errMsg: "成功",
    totalCount: 10
  })
];
