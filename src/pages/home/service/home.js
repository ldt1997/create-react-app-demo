import axios from "axios";

/**
 * 獲取店家列表
 * @param id 请求ID
 * @returns
 */
export const fetchList = ({ id }) => axios.post("/api/home/list", id);

/**
 * 獲取菜单
 * @returns
 */
export const fetchTab = () => axios.get("/api/home/tab");
