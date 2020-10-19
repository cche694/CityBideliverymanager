import * as ActionType from "./actionType"

export const getListAction=(list)=>({
    type:ActionType.GET_LIST,
    list,
})