import "whatwg-fetch";

/**
 * 獲取店家列表
 * @param id 请求ID
 * @returns
 */
export const getList = ({ id }) =>
  fetch("/api/home/list", {
    method: "post",
    body: JSON.stringify({ id }),
    headers: { Accept: "application/json", "Content-Type": "application/json" }
  });
