import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SlateApi from './SlateApi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SlateApi />
  </React.StrictMode>
);