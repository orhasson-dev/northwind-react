import {Redirect, Route, Switch} from "react-router-dom"
import Home from "../../HomeArea/Home/Home";
import About from "../../AboutArea/About/About";
import ProductList from "../../ProductArea/ProductList/ProductList";
import NotFound from "../../SharedArea/NotFound/NotFound";
import Loading from "react-loadable";
import ProgressBar from "../../SharedArea/ProgressBar/ProgressBar";

function Routing(): JSX.Element {
    return (
        <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/products" component={ProductList} exact/>
            <Route path="/about" component={About} exact/>
            {/*<Route path="/contact-us" component={ContactUs} exact/>*/}
            {/*Lazy Loading Example - for contact-us page*/}
            <Route path="/contact-us" component={Loading({loader:() => import("../../ContactUs/ContactUs"),
            loading:ProgressBar,})}/>
            <Redirect from="/" to="/home" exact/>
            <Route component={NotFound} />
        </Switch>
    );
}

export default Routing;
