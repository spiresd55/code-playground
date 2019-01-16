import * as React from "react";
import {mdiMagnify} from "@mdi/js";
import {IconButton, SvgIcon, TextField} from "@material-ui/core";

interface SearchFormProps {
    onSearch: any
}

interface SearchFormState {
    value: string;
}

export class SearchForm extends React.Component<SearchFormProps, SearchFormState> {
    state: any;

    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        if(this.props.onSearch) {
            this.props.onSearch(event.target.value);
        }
    }

    render() {
        return (
            <form>
                <TextField
                    label="DataSource Search"
                    type="search"
                    margin="normal"
                    variant="outlined"
                    value={this.state.value}
                    onChange={this.handleChange}
                    InputProps={{
                        startAdornment: (
                            <IconButton aria-label="search">
                                <SvgIcon>
                                    <path d={mdiMagnify} />
                                </SvgIcon>
                            </IconButton>
                        )
                    }}
                />
            </form>
        );
    }
}