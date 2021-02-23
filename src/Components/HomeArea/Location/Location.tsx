import {Component, SyntheticEvent} from "react";
import "./Location.css";

class Location extends Component {

    private showTheSelectedLocation = (args: SyntheticEvent) => {
        alert((args.target as HTMLSelectElement).value);
    }

    public render(): JSX.Element {
        return (
            <div className="Location Box">
                <select onChange={this.showTheSelectedLocation}>
                    <option defaultValue="Select Location">Select Location</option>
                <option value="North">North</option>
                <option value="Center">Center</option>
                <option value="Tel-Aviv">Tel-Aviv</option>
                <option value="South">South</option>
            </select>
            </div>
        );
    }
}

export default Location;
