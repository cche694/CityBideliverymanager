import { combineReducers } from "redux-immutable";
import {reducer as demoReducer} from "../page/demo/store"
import {reducer as NavLeftReducer} from "../components/navleft/store"
export default combineReducers({
    demo:demoReducer,
    navleft:NavLeftReducer
})