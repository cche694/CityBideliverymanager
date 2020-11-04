import { fromJS } from "immutable";
import * as ActionType from "./actionType";
const defaultState = fromJS({
  list: [],
  page: "",
  page_size: "",
  total_count: "",
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.GET_TABLE_LIST:
      return state.merge({
        list: action.list,
        page:action.page,
        page_size:action.page_size,
        total_count:action.total_count
      });
    default:
      return state;
  }
};
