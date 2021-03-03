import "./Sales.css";
import {Component} from "react";
import logoImage from "../../../Assets/Images/logo.jpg";

// Creating props exact type
interface SalesProps{
    percent: number;
    category?: string;
}

//Class Component Props Use:
class Sales extends Component<SalesProps>{

    //If we have ctor, we must get the props to our ctor and pass them
    //to our super class:
    public constructor(props: SalesProps) {
        super(props);
    }

    public render(): JSX.Element{

        return (
            <div className="Sales Box">
           	<p>Sales: {this.props.percent}% off on all {this.props.category || "Products"}!</p>
            </div>
        );

    }
}




//Functional Components Props Use:
// function Sales(props: SalesProps): JSX.Element {
//     return (
//         <div className="Sales Box">
// 			<p>Sales: {props.percent}% off on all {props.category || "Products"}!</p>
//         </div>
//     );
// }


export default Sales;
