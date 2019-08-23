// import { getList } from "../service/home";

export const getList = payload => {
  return {
    type: "GET_LIST",
    payload: {
      ...payload
    }
  };
};

export const getTabs = () => {
  return {
    type: "GET_TABS"
  };
};
