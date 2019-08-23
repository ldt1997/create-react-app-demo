export const getList = payload => {
  return {
    type: "GET_LIST",
    payload: {
      ...payload
    }
  };
};
