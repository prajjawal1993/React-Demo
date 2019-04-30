import {combineReducers} from 'redux';
import api from './apiReducer';

const allReducers = combineReducers({
	apiReducer: api,
});

export default allReducers;



