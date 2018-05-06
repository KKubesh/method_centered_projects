import axios from 'axios';

export function callGetProject() {
    return axios.get('api/project')
        .then(response => response.data)
        .catch(error => { throw error.response || error; });
}

export function callAddProject(action) {
    return axios.post('api/project', action.payload)
    .then(response => response.data)
    .catch(error => { throw error.reponse || error; });
}

export function callPutProject(action) {
    return axios.put('api/project/'+ action.payload.id, action.payload)
    .then(response => response.data)
    .catch(error => { throw error.reponse || error; });
}

export function callDelProject(action) {
    return axios.delete('api/project/'+ action.payload.id)
    .then(response => response.data)
    .catch(error => { throw error.response || error; });
}