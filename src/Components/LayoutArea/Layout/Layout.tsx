import './Layout.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Routing from "../Routing/Routing";
import {BrowserRouter} from "react-router-dom";

function Layout(): JSX.Element { // JSX.Element = UI object
    return (
        <BrowserRouter>
        <div className="Layout">
            <header><Header/></header>
            <aside><Menu/></aside>
            <main>
              <Routing/>
            </main>
            <footer><Footer/></footer>
        </div>
        </BrowserRouter>
    );
}

export default Layout;