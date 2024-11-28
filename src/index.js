
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FilterContextProvider } from './Contex/Filter_context';
import { CartProvider } from './Contex/Cart_Contex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartProvider>
        <App />
        </CartProvider>
      </FilterContextProvider>
  </React.StrictMode>
);


reportWebVitals();
