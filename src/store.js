import { createStore } from 'redux';

import {dataArray} from './dataArray'
import { combineReducers } from "redux";
import { bakeries } from "./bakeries";
import { cartActions } from "./cartActions";
import { filterReducer } from './bakeries';
// import { bakery } from './bakery'

// const rootReducers = combineReducers({
//     bakery,
//      bakeries,
//      cartActions
// })
export const store = createStore(combineReducers({bakeries, cartActions, filterReducer}), dataArray)
console.log(store.getState())