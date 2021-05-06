import axios from 'axios';
 
export default function authenticationToken(token) {
    if(token) {
        axios.defaults.headers.common['Authorization'] = `${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}