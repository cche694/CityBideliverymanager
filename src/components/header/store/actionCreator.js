import * as ActionType from "./actionType";
import axios from "axios";
const _getWetherAction = (province, weather, temperature) => ({
  type: ActionType.GET_WEATHER,
  province,
  weather,
  temperature,
});
export const SetNameAction = (name) => ({
  type: ActionType.SET_NAME,
  name,
});
export const SetTimeAction = (time) => ({
  type: ActionType.SET_TIME,
  time,
});
export const GetWeatherAction = () => {
  return (dispatch) => {
    const url =
      "/api/v3/weather/weatherInfo?city=110101&key=cfd6471f4b7e8310fde334b4f4040d42";
    axios.get(url).then((res) => {
      console.log(res.data.lives[0]);
      const data = res.data.lives[0];
      const action = _getWetherAction(
        data.province,
        data.weather,
        data.temperature
      );
      dispatch(action);
    });
  };
};
