const initialState = 0

import { ActionType } from "../action-types";
import { Action } from "../actions/";

const reducerAccount = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0
    default:
      return state
  }
}


export default reducerAccount