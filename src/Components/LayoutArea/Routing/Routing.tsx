import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "../../HomeArea/Home/Home";
import About from "../../AboutArea/About/About";
import ProductList from "../../ProductArea/ProductList/ProductList";
import ContactUs from "../../ContactUs/ContactUs";

function Routing(): JSX.Element {
    return (

        <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/products" component={ProductList} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/contact-us" component={ContactUs} exact/>
        </Switch>
    );
}

export default Routing;
