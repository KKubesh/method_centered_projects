const methodList = (state = [], action) => {
    console.log('methodList', action);
    
    switch (action.type) {
        case 'SET_METHOD':
            return action.payload
        default:
            return state;
    }
};

export default methodList;