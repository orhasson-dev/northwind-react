import './Layout.css';
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Home from "../../HomeArea/Home/Home";
import ContactUs from "../../ContactUs/ContactUs";

function Layout(): JSX.Element { // JSX.Element = UI object
    return (
        <div className="Layout">
            <header><Header/></header>
            <aside><Menu/></aside>
            <main>
                <Home/>
                {/*<ContactUs/>*/}
            </main>
            <footer><Footer/></footer>
        </div>
    );
}

export default Layout;