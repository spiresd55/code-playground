import * as React from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as DatasourceActionCreators from "../../store/actions/DatasourceActions";
import {Source} from "./Source";
import SourceList from "./SourceList";
import {SearchForm} from "./SearchForm";

interface ComponentProps {
    onSearch: any;
    sources: Source[];
    search: string;
}

class Home extends React.Component<ComponentProps> {
    boundActionCreators: any;
    dispatch: any;
    constructor(props) {
        super(props);

        const {dispatch} = props;
        this.dispatch = dispatch;

        this.boundActionCreators = bindActionCreators(DatasourceActionCreators, dispatch);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        let {dispatch} = (this.props as any);
        this.dispatch = dispatch;

        let action = DatasourceActionCreators.loadDataSourceData();
        dispatch(action);
    }

    onSearch(searchText: string) {
        //Call search updated action creator
        let action = DatasourceActionCreators.datasourceSearchUpdated(searchText);
        this.dispatch(action);
    }

    render() {
        return <div>
            <h1>React Typescript Code Challenge</h1>
            <SearchForm onSearch={this.onSearch}></SearchForm>
            <SourceList sources={this.props.sources} filter={this.props.search}></SourceList>
        </div>
    }
}

function mapStateToProps(state, ownProps) {
    return {
        sources: state.DatasourceState.sources,
        search: state.DatasourceState.search
    }
}

export default connect(mapStateToProps)(Home);