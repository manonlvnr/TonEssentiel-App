import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthContextProvider } from './context/AuthContext';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { ToggleModeContextProvider } from './context/ToggleModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ToggleModeContextProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </ToggleModeContextProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();

reportWebVitals();
