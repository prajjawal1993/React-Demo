import { combineReducers } from 'redux';
import apiReducer from './apiReducer.js';

export default function getRootReducer(navReducer) {
    return combineReducers({
      apiReducer,
      nav:navReducer,
    });
}