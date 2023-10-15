import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
//Redux provider
import { Provider } from 'react-redux';
import { store } from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename='/crown-clothing' >
    <Provider store={store} >
      <App />
    </Provider>
    {/* <UserProvider>
      <CartProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </CartProvider>
    </UserProvider> */}
  </BrowserRouter>
);
reportWebVitals();
