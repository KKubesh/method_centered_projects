import axios from 'axios';

export function callGetProjectInfo(action) {
    return axios.get('/api/projectinfo/'+ action.payload.id)
        .then(response => response.data)
        .catch(error => { throw error.response || error; });
}