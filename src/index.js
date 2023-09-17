import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/user-context.component';
import { CategoriesProvider } from './context/categories.context';
import { CartProvider } from './context/cart-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/crown-clothing' >
    <UserProvider>
      <CartProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
);
reportWebVitals();
/**
 * BrowserRouter basename:

Make sure that the basename property in your BrowserRouter component matches the subdirectory where your app is hosted on GitHub Pages. For example, if your app is hosted at https://<username>.github.io/<repository-name>, the basename should be set as:
json
Copy code
<BrowserRouter basename="/<repository-name>">
 */