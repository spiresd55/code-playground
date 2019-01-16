import {Action} from './Actions';

export function loadDataSourceData() {
    return (dispatch, getState) => {
        fetch(`http://localhost:3000/datasource`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                dispatch(dataSourcesLoaded(data));
            });
    }
}

export function dataSourcesLoaded(sources) {
    return {type: Action.DATASOURCE_LOADED, data: sources}
}

export function datasourceSearchUpdated(search) {
    return {type: Action.DATASOURCE_SEARCH_UPDATED, data: search}
}