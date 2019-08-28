const home = (state = {}, { type, payload }) => {
  switch (type) {
    case "FETCH_LIST_SUCCESS":
      return {
        ...state,
        list: payload
      };
    case "FETCH_TAB_SUCCESS":
      return {
        ...state,
        tabList: payload
      };
    default:
      return state;
  }
};

export default home;
