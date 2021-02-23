import './Header.css';
import Logo from "../Logo/Logo";

function Header() : JSX.Element { // JSX.Element = UI object
    return (
        <div className="Header">
            <Logo/>
            <h1>Northwind Website</h1>
        </div>
    );
}

export default Header;