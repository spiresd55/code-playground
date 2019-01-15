import * as React from "react"

interface SearchFormProps {
    onSearch: any
}

interface SearchFormState {
    value: string;
}

export class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
    state: any;
    onSubmit: any;

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        console.log(this.props);
        if(this.props.onSearch) {
            this.props.onSearch(event.target.value);
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Search
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="submit"/>
            </form>
        );
    }
}