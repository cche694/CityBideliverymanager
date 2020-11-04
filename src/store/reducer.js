import { combineReducers } from "redux-immutable";
import { reducer as demoReducer } from "../page/demo/store";
import { reducer as NavLeftReducer } from "../components/navleft/store";
import { reducer as HeaderReducer } from "../components/header/store";
import { reducer as UiReducer } from "../page/ui/store";
export default combineReducers({
  demo: demoReducer,
  navleft: NavLeftReducer,
  header: HeaderReducer,
  ui: UiReducer,
});
