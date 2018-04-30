import axios from 'axios';

export function callGetMethod() {
    return axios.get('api/method')
        .then(response => response.data)
        .catch((error) => { throw error.response || error; });
}