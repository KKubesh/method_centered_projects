import axios from 'axios';

export function callGetMethod() {
    return axios.get('api/method')
        .then(response => response.data)
        .catch(error => { throw error.response || error; });
}

export function callAddMethod() {
    return axios.post('api/method')
    .then((response) => response.data)
    .catch(error => { throw error.reponse || error; });
}