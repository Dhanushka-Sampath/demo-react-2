import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/lib/integration/react';
import {configureStore} from './store';
// import persistStore from 'redux-persist/es/persistStore';

const store = configureStore()
//const persistor = persistStore(store);

// ReactDOM.render(
//   <Provider store={store}>
//     <PersistGate
//       loading = { <div>Loading...</div>}
//       persistor={persistor}>
//         <App />
//     </PersistGate>
//   </Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
