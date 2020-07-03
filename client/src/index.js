import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { ConfigureStore } from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'


let store = ConfigureStore()
const persistor = persistStore(store);


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading....</div>} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);


