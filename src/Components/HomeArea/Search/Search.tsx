import {Component, SyntheticEvent} from "react";
import "./Search.css";

interface SearchState {
    textToSearch: string;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = { textToSearch: ""};
    }

    private textChanged = (args: SyntheticEvent) =>{
        const value = (args.target as HTMLInputElement).value;
        this.setState({textToSearch: value});
    }

    private clear = () =>{
        this.setState({textToSearch: ""});
    }

    public render(): JSX.Element {
        return (
            <div className="Search Box">
				<input type="text" onChange={this.textChanged} value={this.state.textToSearch}  />
				<span> Searching for: {this.state.textToSearch}</span>
                <button onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default Search;
