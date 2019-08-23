const home = (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        list: [
          {
            id: 1,
            title: "炸雞漢堡",
            star: 5,
            price: "1.5",
            time: "34",
            img: "http://my.yjbys.com/uploads/company/logo/7484461.jpg"
          },
          {
            id: 2,
            title: "炸雞漢堡",
            star: 5,
            price: "1.5",
            time: "34",
            img: "http://my.yjbys.com/uploads/company/logo/7484461.jpg"
          },
          {
            id: 3,
            title: "炸雞漢堡",
            star: 5,
            price: "1.5",
            time: "34",
            img: "http://my.yjbys.com/uploads/company/logo/7484461.jpg"
          },
          {
            id: 4,
            title: "炸雞漢堡",
            star: 5,
            price: "1.5",
            time: "34",
            img: "http://my.yjbys.com/uploads/company/logo/7484461.jpg"
          }
        ]
      };
    case "GET_TABS":
      return {
        ...state,
        tabsList: [
          "全部商家",
          "美食",
          "快餐便當",
          "特色菜係",
          "異國料理",
          "小吃夜宵",
          "甜品飲品",
          "果樹生鮮",
          "異國料理1",
          "商店超市",
          "小吃夜宵1",
          "甜品飲品1",
          "果樹生鮮1",
          "異國料理2",
          "商店超市1"
        ]
      };
    default:
      return state;
  }
};

export default home;
