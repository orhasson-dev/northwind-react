import { Component } from "react";
import "./Slogan.css";

interface SloganProps {
	message:string;
}

class Slogan extends Component<SloganProps> {

    public render(): JSX.Element {
        return (
            <div className="Slogan Box">
				<p>{this.props.message}</p>
            </div>
        );
    }
}

export default Slogan;
