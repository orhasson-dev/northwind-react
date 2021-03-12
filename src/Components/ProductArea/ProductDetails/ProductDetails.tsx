import {Component} from "react";
import "./ProductDetails.css";
import {NavLink} from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import {RouteComponentProps} from "react-router-dom";
import axios from "axios";
import globals from "../../../Services/Globals";
import ProductCard from "../ProductCard/ProductCard";
import ProgressBar from "../../SharedArea/ProgressBar/ProgressBar";
import {confirmAlert} from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import store from "../../../Redux/Store";
import {productsDeletedAction} from "../../../Redux/ProductsState"; // Import css


// interface containing the route parameters
// The exact route params in the Routing must be here as string variables:
interface RouteParams {
    id: string;
}

// Our props interface must extends the following:
interface ProductDetailsProps extends RouteComponentProps<RouteParams> {

}

// Our State:
interface ProductDetailsState {
    product: ProductModel;
}

class ProductDetails extends Component<ProductDetailsProps, ProductDetailsState> {


    public constructor(props: ProductDetailsProps) {
        super(props);
        this.state = {
            product: null
        };
    }

    public async componentDidMount() {
        try {
            const id =  +this.props.match.params.id;
            const product = store.getState().productsState.products.find(p => p.id === id);
        if(product){
            //Value Shorthand JS (ES6)
            this.setState({ product });
        }
        else {
            const response = await axios.get<ProductModel>(
                globals.productUrlDelayed + this.props.match.params.id);
            this.setState({product: response.data});

        }
        } catch (err) {
            console.log(err);
        }
    }

    private submitHandler = () => {

        confirmAlert({
            title: "CAUTION !!!!",
            message:
                "Are you absolutely sure you want to delete product ",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => this.deleteProduct()
                },
                {
                    label: "No",
                    onClick: () => {
                    }
                }
            ]
        });

    };

    private deleteProduct = async () => {

        try {
            //create a message Do you really want to delete?
            await axios.delete(globals.productUrl + this.state.product.id);
            store.dispatch(productsDeletedAction(this.state.product.id));
            //Redirect to products page.
            this.props.history.push("/products");

        } catch (err) {
            console.log(err);
        }
    }


    public render(): JSX.Element {
        return (
            <div className="ProductDetails">
                <h2>Product Details</h2>
                {this.state.product === null && <ProgressBar/>}

                {/*Add the loading component until product downloaded from server*/}
                {this.state.product &&
                <>
                    <h3>{this.state.product.name}</h3>
                    <h3>Price: ${this.state.product.price}</h3>
                    <h3>Stock: {this.state.product.stock}</h3>
                    <img src={globals.productUrl + "images/" + this.state.product.imageName} alt="View" width={200} height={200}/>
                </>
                }
                <br/><br/>
                <NavLink to="/products"> Back </NavLink>
                <span> | </span>
                <a href="#" onClick={this.submitHandler}>Delete</a>

            </div>
        );
    }
}

export default ProductDetails;
