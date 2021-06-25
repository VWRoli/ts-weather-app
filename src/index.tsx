import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SettingsProvider } from './context/settingsContext';
//CSS
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
