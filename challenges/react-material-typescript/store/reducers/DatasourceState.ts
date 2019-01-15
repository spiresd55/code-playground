const defaultState: any = {
    sources: [],
    search: ''
};

//TODO: Place an enum for actiontypes
const reducer = function(state=defaultState, action: any) {
    switch(action.type) {
        case 'DATASOURCE_LOADED':
            return Object.assign({}, state, action.data);
        case 'DATASOURCE_SEARCH_UPDATED':
            console.log('Search Updated in redux');
            console.log(action.data);
            return Object.assign({}, state, {search: action.data});
        default:
            return state;
    }
    return state;
};

export default reducer;