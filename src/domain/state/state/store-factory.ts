import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../user/reducer';

const reducers = combineReducers({
  users: userReducer,
});

export type State = ReturnType<typeof reducers>;

export const store = createStore(reducers, {}, applyMiddleware(thunk));
