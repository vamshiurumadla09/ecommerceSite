import { combineReducers } from "redux";
import counteriesApiReducer from "./countriesApiReducer";
import productApiReducer from "./productsApiReducer";

const reducer = combineReducers({countriesApi:counteriesApiReducer, products:productApiReducer});
export default reducer;