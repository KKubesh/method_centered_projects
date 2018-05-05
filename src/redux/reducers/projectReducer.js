const projectList = (state = [], action) => {
    console.log('projectList', action);
    
    switch (action.type) {
        case 'SET_PROJECT':
            return action.payload
        default:
            return state;
    }
};

export default projectList;