import './Layout.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";

function Layout() : JSX.Element { // JSX.Element = UI object
    return (
        <div className="Layout">
            <header><Header/></header>
            <aside><Menu/></aside>
            <main>C</main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Layout;