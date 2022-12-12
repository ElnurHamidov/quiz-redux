import counter from './Counter';
import isTrue from './True';
import finish from './Finish';
import {combineReducers} from 'redux';

const combine = combineReducers({
    counter,
    isTrue,
    finish
})

export default combine;