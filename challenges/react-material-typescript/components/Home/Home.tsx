import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as DatasourceActionCreators from "../../store/actions/DatasourceActions"
import SourceList from "./SourceList";
import {SearchForm} from "./SearchForm";

interface ComponentProps {
    onSearch: any;
    sources: any[]; //Create Source Type
    search: string;
}

interface ComponentState {

}

class Home extends React.Component<ComponentProps, ComponentState> {
    boundActionCreators: any;
    dispatch: any; //TODO: Typecheck this with correct type
    constructor(props) {
        super(props);

        const {dispatch} = props;
        this.dispatch = dispatch;

        this.boundActionCreators = bindActionCreators(DatasourceActionCreators, dispatch);
        this.onSearch = this.onSearch.bind(this);
        console.log('Action Creators');
        console.log(this.boundActionCreators);
    }

    componentDidMount() {
        console.log('Component did mount');
        let {dispatch} = (this.props as any);
        this.dispatch = dispatch;
        console.log(dispatch, this.props);

        let action = DatasourceActionCreators.loadDataSourceData();
        dispatch(action);
    }

    onSearch(searchText: string) {
        console.log('On search callback called');
        console.log(searchText);
        //Call search updated action creator
        let action = DatasourceActionCreators.datasourceSearchUpdated(searchText);
        this.dispatch(action);
    }

    render() {
        console.log(this.props);
        let {dispatch} = (this.props as any);
        return <div>
            <h1>Welcome to the home screen</h1>
            <SearchForm onSearch={this.onSearch}></SearchForm>
            <SourceList sources={this.props.sources} filter={this.props.search}></SourceList>
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    console.log('MAP STATE TO PROPS CALLED');
    console.log(state);
    console.log(ownProps);

    return {
        sources: state.DatasourceState.sources,
        search: state.DatasourceState.search
    }
}

export default connect(mapStateToProps)(Home);