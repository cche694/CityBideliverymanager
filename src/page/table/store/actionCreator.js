import * as ActionType from "./actionType";
import { fetchData } from "../../../axios";
import axios from "../../../jsonp";
const _getTableList = (list, page, page_size, total_count) => ({
  type: ActionType.GET_TABLE_LIST,
  list,
  page,
  page_size,
  total_count,
});
export const getList = () => {
  return (dispatch) => {
    axios
      .ajax({
        url: "/myapi/list",
        data: {
          paramas: {
            page: 1,
          },
        },
      })
      .then((res) => {
        console.log(res);
        const data = res;

        const action = _getTableList(
          data.list,
          data.page,
          data.page_size,
          data.total_count
        );

        dispatch(action);
      });
  };
};
