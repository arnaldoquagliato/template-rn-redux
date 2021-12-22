import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from '../user/reducer';

const reducers = combineReducers({
  users: userReducer,
});

export type State = ReturnType<typeof reducers>;

const storeFactory = () => createStore(reducers, applyMiddleware(thunk));

export default storeFactory;
