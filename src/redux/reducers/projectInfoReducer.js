const projectInfo = (state = [], action) => {
    console.log('projectInfo', action);
    
    switch (action.type) {
        case 'SET_PROJECTINFO':
            return action.payload[0]
        default:
            return state;
    }
};

export default projectInfo;