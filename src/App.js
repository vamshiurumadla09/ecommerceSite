import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import ProductApi from './components/ProductApi';
import CountriesApi from './components/CountriesApi';
function App() {
  return (
    <Provider store={store}>
      <ProductApi></ProductApi>
      <CountriesApi></CountriesApi>
    </Provider>
  )
}
export default App