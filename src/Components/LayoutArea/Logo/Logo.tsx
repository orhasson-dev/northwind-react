import "./Logo.css";
import logoImage from "../../../Assets/Images/logo.jpg"

function Logo(): JSX.Element {
    return (
        <div className="Logo">
			<img src={logoImage} alt="Logo Image"/>
        </div>
    );
}

export default Logo;
