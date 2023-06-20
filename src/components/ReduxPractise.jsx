import React from 'react';
import DemoComponent from './DemoComponent';
import CountriesApi from './CountriesApi';
import ProductApi from './ProductApi';

function ReduxPractise() {
  return (
    <div>
        <div className='betterview'>
      <h1>wel-come to redux thunk</h1>
      <DemoComponent></DemoComponent>
      <CountriesApi></CountriesApi>
      <ProductApi></ProductApi>
    </div>
    </div>
  )
}

export default ReduxPractise