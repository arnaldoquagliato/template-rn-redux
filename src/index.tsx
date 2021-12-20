import React from 'react';
import { Provider } from 'react-redux';

import Routes from './route/navigation.js';
import { store } from './state/store';

export function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
