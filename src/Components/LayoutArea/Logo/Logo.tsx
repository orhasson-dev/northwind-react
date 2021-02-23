import "./Logo.css";
import logoImage from "../../../Assets/Images/logo.jpg"
import {Component} from "react";


//Class Component
class Logo extends Component{
    public render(): JSX.Element{
        return (
            <div className="Logo">
                <img src={logoImage}  alt="Logo Image"/>
            </div>
        );

    }
}


//Functional Component
// function Logo(): JSX.Element {
//     return (
//         <div className="Logo">
// 			<img src={logoImage} alt="Logo Image"/>
//         </div>
//     );
// }

export default Logo;
