import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/my-phone-contacts">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
