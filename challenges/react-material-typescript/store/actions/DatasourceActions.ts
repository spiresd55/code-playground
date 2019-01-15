export function loadDataSourceData() {
    return (dispatch, getState) => {
        fetch(`http://localhost:3000/datasource`)
            .then((res) => {
                //TODO: Add a case incase its not 200 status
                return res.json();
            })
            .then((data) => {
                dispatch(dataSourcesLoaded(data));
            });
    }
}

//TODO: turn action types into an enum
export function dataSourcesLoaded(sources) {
    console.log('Here are the sources');
    console.log(sources);
    return {type: 'DATASOURCE_LOADED', data: sources}
}

export function datasourceSearchUpdated(search) {
    return {type: 'DATASOURCE_SEARCH_UPDATED', data: search}
}