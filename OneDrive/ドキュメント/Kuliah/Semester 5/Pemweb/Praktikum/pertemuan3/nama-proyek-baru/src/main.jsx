import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// 1. Import BrowserRouter
import { BrowserRouter } from 'react-router-dom';
// 2. Import BookProvider kita
import { BookProvider } from './context/BookContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 3. Bungkus App dengan BrowserRouter dan BookProvider */}
    <BrowserRouter>
      <BookProvider>
        <App />
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>,
);