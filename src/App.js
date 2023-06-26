import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
      <div>wel-come to ecommerce app</div>
    </Provider>
  )
}
export default App