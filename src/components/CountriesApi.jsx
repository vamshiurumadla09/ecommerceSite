import React from 'react'
import { connect } from 'react-redux';
import { selectCountriesApi } from '../store/reduces/countriesApiReducer';
import {getAllCountries} from '../store/actions';

function CountriesApi(props) {
    console.log('countryAPI :'+props.countries)
    return (
        <div className='betterview'>
            <h3>CountriesApi</h3>
            <button onClick={props.getCountries}>get all countries </button>
            <ul>
                {props.countries.map((country, i)=>{
                    return (
                        <li key={i}>{country.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

function mapStateToProps(store){
return selectCountriesApi(store);
}

function mapDispatchToProps(dispatch){
    return{
        getCountries:()=>{dispatch(getAllCountries())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountriesApi)