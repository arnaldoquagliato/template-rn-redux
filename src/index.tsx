import React from 'react'
import Home from './App';
import { Provider } from "react-redux";
import { store } from './state/store'


export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}