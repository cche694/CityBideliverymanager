import { fromJS } from "immutable";
import * as ActionCreator from "./actionCreator"
import * as ActionType from "./actionType"
import axios from "axios";
const defaultState=fromJS({
    value:""
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case ActionType.DEMO_DATA:
        return state.set("value",action.value)
        default:
            return state
    }
}