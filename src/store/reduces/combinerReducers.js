import { combineReducers } from "redux";
import demoReducer from "./demoReducer";
import counteriesApiReducer from "./countriesApiReducer";
import productApiReducer from "./productsApiReducer";

const reducer = combineReducers({demo:demoReducer, countriesApi:counteriesApiReducer, products:productApiReducer});
export default reducer;