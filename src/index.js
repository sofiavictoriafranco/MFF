import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './redux/store';
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next';

import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'


import { Auth0Provider } from "@auth0/auth0-react";


i18next.init({
  interpolation: {escapeValue: false},
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en:{
      global: global_en,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <I18nextProvider i18n={i18next}>
     <Auth0Provider
      domain="dev-em1kceca0ecuq223.us.auth0.com"
      clientId="14EapmtxN6pVjnSqDRKDvRuWHlGTqw5V"
      redirectUri={window.location.origin}
      scope="openid profile email"
    >
     <Provider store={store}>
        <BrowserRouter>
  <ToastContainer />
    <App />
    </BrowserRouter>
    </Provider>
    </Auth0Provider>
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
