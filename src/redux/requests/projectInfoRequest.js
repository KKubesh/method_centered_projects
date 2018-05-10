import axios from 'axios';

export function callGetProjectInfo(action) {
    return axios.get('/api/projectinfo/'+ action.payload.id)
        .then(response => response.data)
        .catch(error => { throw error.response || error; });
}
// Bookmark POST request
export function callPostBookmark(action) {
    return axios.post('/api/bookmark', action.payload)
        .then(response => response.data)
        .catch(error => { throw error.response || error; });
}
// Bookmark GET request 
export function callGetBookmark(action){
    return axios.get('/api/bookmark/'+ action.project_id)
    .then(response => response.data)
    .catch(error => { throw error.reponse || error;});
}
// Bookmark DEL request
export function callDelBookmark(action){
    return axios.delete(`/api/bookmark/${action.payload.method_id}/${action.payload.project_id}`)
    .then(response => response.data)
    .catch(error => { throw error.reponse || error;});
}