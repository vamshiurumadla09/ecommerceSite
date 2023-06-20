import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';
import ReduxPractise from './components/ReduxPractise';
function App() {
  return (
    <Provider store={store}>
      <ReduxPractise></ReduxPractise>
    </Provider>
  )
}
export default App