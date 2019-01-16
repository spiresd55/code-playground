import {Action} from '../actions/Actions';

const defaultState: any = {
    sources: [],
    search: ''
};

const reducer = function(state=defaultState, action: any) {
    switch(action.type) {
        case Action.DATASOURCE_LOADED:
            return Object.assign({}, state, action.data);
        case Action.DATASOURCE_SEARCH_UPDATED:
            return Object.assign({}, state, {search: action.data});
        default:
            return state;
    }
    return state;
};

export default reducer;