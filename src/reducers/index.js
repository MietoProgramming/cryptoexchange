import { combineReducers } from 'redux';
import { homepageReducers } from './homepage';

const reducers = combineReducers({
    homepage: homepageReducers
});

export default reducers;