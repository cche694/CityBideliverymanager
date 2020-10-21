import { fromJS } from "immutable";
import * as ActionCreator from "./actionCreator";
import * as ActionType from "./actionType";
import {fetchData} from "../../../api"
const defaultState = fromJS({
  username: "",
  time: "",
  province: "",
  weather: "",
  temperature: "",
});
export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionType.SET_NAME:
      return state.merge({
        username: action.name,
      });
    case ActionType.SET_TIME:
      return state.set("time", action.time);
    case ActionType.GET_WEATHER:
      console.log(action.province)
      return state.merge({
        province: action.province,
        weather: action.weather,
        temperature: action.temperature,
      });
    default:
      return state;
  }
};
