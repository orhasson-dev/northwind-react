import {Component, SyntheticEvent} from "react";
import styles from "./Search.module.css"

interface SearchState {
    textToSearch: string;
    toggle: boolean;
}

class Search extends Component<{}, SearchState> {

    public constructor(props: {}) {
        super(props);
        this.state = { textToSearch: "",toggle: true};
    }

    private textChanged = (args: SyntheticEvent) =>{
        const value = (args.target as HTMLInputElement).value;
        this.setState({textToSearch: value});
    }

    private clear = () =>{
        if(this.state.toggle){
            this.setState({toggle: false});
        }
        else{
            this.setState({toggle: true});
        }
        this.setState({textToSearch: ""});
    }

    private dynamicStylingTrue = {
        backgroundColor: 'red'
    }

    private dynamicStylingFalse = {
        backgroundColor: 'black'
    }

    public render(): JSX.Element {
        return (
            <div className={styles.Search + " Box"} style={this.state.toggle? this.dynamicStylingTrue
                : this.dynamicStylingFalse}>
				<input className={styles.InputStyle} type="text" onChange={this.textChanged} value={this.state.textToSearch}  />
				<span className={styles.SpanStyle}> Searching for: {this.state.textToSearch}</span>
                <button className={styles.ButtonStyle} onClick={this.clear}>Clear</button>
            </div>
        );
    }
}

export default Search;
