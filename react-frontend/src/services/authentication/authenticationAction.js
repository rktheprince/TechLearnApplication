import * as AT from './authenticationTypes';
import axios from 'axios';
 
export const authenticateUser = (userId, password) => {
    const credentials = {
        userId:userId,
        password:password,
    };
    return dispatch => {
        dispatch({
            type: AT.LOGIN_REQUEST
        });
        axios.post("http://localhost:9090/login", credentials)
            .then(response => {
                let token = response.data;
                console.log(response.data);
                localStorage.setItem('jwtToken', token);
                dispatch(success(token));
               

            })
            .catch(error => {
                dispatch(failure());
            });
    };

};

 
export const logoutUser = () => {
    return dispatch => {
        dispatch({
            type: AT.LOGOUT_REQUEST
        });
        localStorage.removeItem('jwtToken');
        dispatch(success(false));
    };
};
 
const success = isLoggedIn => {
    return {
        type: AT.SUCCESS,
        payload: isLoggedIn
    };
};
 
const failure = () => {
    return {
        type: AT.FAILURE,
        payload: false
    };
};