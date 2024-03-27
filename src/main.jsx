/**
 * Renders the React application.
 *
 * Imports React and ReactDOM to initialize the app. Also imports BrowserRouter to enable routing.
 *
 * Creates the root React element and renders the App component wrapped in <BrowserRouter> to enable routing.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);