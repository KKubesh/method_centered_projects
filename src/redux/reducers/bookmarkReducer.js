const projectBookmarks = (state = [], action) => {
    
    switch (action.type) {
        case 'SET_BOOKMARK':
            return action.payload
        default:
            return state;
    }
};

export default projectBookmarks;