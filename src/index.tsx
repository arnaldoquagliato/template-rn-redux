import React from 'react';
import { Provider } from 'react-redux';

import storeFactory from './domain/state/state/store-factory';
import Routes from './routes/navigation.js';

const store = storeFactory();

export function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
