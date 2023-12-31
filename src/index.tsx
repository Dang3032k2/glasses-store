import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Home } from './pages/Home';
import { Layout } from './components/Layout';
import { Featured } from './pages/Featured';
import { Shop } from './pages/Shop';
import { Recommended } from './pages/Recommended';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import './index.css';
import AppRoutes from './routes/AppRoutes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
