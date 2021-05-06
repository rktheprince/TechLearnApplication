import {combineReducers} from 'redux';
import authenticationReducer from './authentication/authenticationReducer';
 
const rootReducer = combineReducers({
    auth: authenticationReducer
});
 
export default rootReducer;