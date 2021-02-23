import "./Recommended.css";
import {Component, SyntheticEvent} from "react";


class Recommended extends Component{

    private item = "Red Wine"; //Demo for getting it from api

    private showRecommendation = (args: SyntheticEvent) => {
        console.log(args.target); // The element raising the event
        console.log(args.nativeEvent); // The HTML native event
        console.log((args.target as HTMLButtonElement).innerHTML); // Converting target to a button for getting the innerHTML
        alert(this.item);
    }

    public render(): JSX.Element {
        return (
        <div className="Recommended Box">
	        <button onClick={this.showRecommendation}>Recommended a Product</button>
        </div>
    );
    }
}







//Functional Component Event Example.
// function Recommended(): JSX.Element {
//
//     const item = "Red Wine"; //Demo for getting it from api
//
//     function showRecommendation(args: SyntheticEvent):void{
//         console.log(args.target); // The element raising the event
//         console.log(args.nativeEvent); // The HTML native event
//         console.log((args.target as HTMLButtonElement).innerHTML); // Converting target to a button for getting the innerHTML
//         alert(item);
//     }
//
//     return (
//         <div className="Recommended Box">
// 	        <button onClick={showRecommendation}>Recommended a Product</button>
//         </div>
//     );
// }

export default Recommended;
