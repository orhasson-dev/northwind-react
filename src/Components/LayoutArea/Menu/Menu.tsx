import "./Menu.css";
import {Link} from "react-router-dom"

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/about">About</Link>
                <Link to="/contact-us">Contact Us</Link>
            </nav>
        </div>
    );
}

export default Menu;
