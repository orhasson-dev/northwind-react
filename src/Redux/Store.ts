import {combineReducers, createStore} from "redux"
import {productsReducer} from "./ProductsState";
import {catsReducer} from "./CatsState";

// Single Reducer:
// const store = createStore(productsReducer);

// Redux three operations using single reducer:
// 1. Get State: store.getState().products
// 2. Subscribe: store.subscribe(...)
// 3. Dispatch: store.dispatch(...)

//export default store.

// ------------------------------------------------------------------------------------------------------

//Multiple Reducers:
const reducers = combineReducers({productsState: productsReducer, catsState: catsReducer});
const store = createStore(reducers);

export default store;

// Redux three operations using multiple reducer:
// 1. Get State: store.getState().productsState.products; / Get State: store.getState().catsState.cats;
// 2. Subscribe: store.subscribe(...)
// 3. Dispatch: store.dispatch(...)




