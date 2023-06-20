const initialState = {
    products: []
}

function productApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'GETPRODUCTS':
            return {...state, products:[...action.payload]}
            break;
        default:
            return {
                ...state
            }
            break;
    }
}

export function selectProductState(store) {
    return store.products
}
export default productApiReducer;