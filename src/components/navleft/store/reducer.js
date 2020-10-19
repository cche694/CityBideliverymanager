import { fromJS } from "immutable";
import * as ActionCreator from "./actionCreator"
import * as ActionType from "./actionType"
import axios from "axios";
const defaultState=fromJS({
    navList:[],
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case ActionType.GET_LIST:
        return state.set("navList",fromJS(action.list))
        default:
            return state
    }
}