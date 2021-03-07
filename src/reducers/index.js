import { combineReducers } from 'redux';
import { currenciesFetchReducer } from './currencies.jsx';

const reducers = combineReducers({
    currencies: currenciesFetchReducer
});

export default reducers;