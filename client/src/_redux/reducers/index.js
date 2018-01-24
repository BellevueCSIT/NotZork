// @flow
import reducer_Navigation from './reducer_Navigation';
import {combineReducers} from 'redux';

export default combineReducers({
    navigationStore: reducer_Navigation
});