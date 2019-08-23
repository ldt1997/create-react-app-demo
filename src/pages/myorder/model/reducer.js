const home = (state = {}, action) => {
  switch (action.type) {
    case "GET_LIST":
      return {
        ...state,
        list: [
          {
            title: "我的订单 1"
          },
          {
            title: "我的订单 2"
          },
          {
            title: "我的订单 3"
          },
          {
            title: "我的订单 4"
          }
        ]
      };
    default:
      return state;
  }
};

export default home;
