import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SlateApi from './SlateApi';
import { TestContext } from './context/testContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestContext>
      <App />
    </TestContext>
  </React.StrictMode>
);