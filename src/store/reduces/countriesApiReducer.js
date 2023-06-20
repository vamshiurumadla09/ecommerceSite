const initialState = {
    countries: []
}

function counteriesApiReducer(state = initialState, action) {

    switch (action.type) {
        case 'GETCOUNTRIES':
            return {...state, countries:[...action.payload]}
            break;
        default:
            return {...state}
            break;
    }
    return ({
        ...state
    });

}

export function selectCountriesApi (store){
    return store.countriesApi
}

export default counteriesApiReducer;