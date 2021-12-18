import { combineReducers } from "redux"
import reducerAccount from "./accountReduce";

export const reducers = combineReducers({
  account: reducerAccount
})

export type State = ReturnType<typeof reducers>