import React from 'react';
import { Provider } from 'react-redux';

import { store } from './domain/state/state/store-factory';
import Routes from './route/navigation.js';

export function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
