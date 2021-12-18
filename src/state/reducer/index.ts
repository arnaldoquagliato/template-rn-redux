import { combineReducers } from "redux"
import reducerAccount from "./accountReduce";

const reducers = combineReducers({
  account: reducerAccount
})

export default reducers