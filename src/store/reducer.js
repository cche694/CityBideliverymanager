import { combineReducers } from "redux-immutable";
import {reducer as demoReducer} from "../page/demo/store"
export default combineReducers({
    demo:demoReducer
})