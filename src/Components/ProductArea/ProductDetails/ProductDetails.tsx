import { Component } from "react";
import "./ProductDetails.css";
import {NavLink} from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { RouteComponentProps } from "react-router-dom";
import axios from "axios";
import globals from "../../../Services/Globals";
import ProductCard from "../ProductCard/ProductCard";

// interface containing the route parameters
// The exact route params in the Routing must be here as string variables:
interface RouteParams{
    id: string;
}

// Our props interface must extends the following:
interface ProductDetailsProps extends RouteComponentProps<RouteParams>{

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
            const response = await axios.get<ProductModel>(
                globals.productUrlDelayed  + this.props.match.params.id );
            this.setState({product: response.data});
        } catch (err) {
            console.log(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductDetails">
                <h3>{this.state.product.name}</h3>
                <h3>Price: ${this.state.product.price}</h3>
                <h3>Stock: {this.state.product.stock}</h3>
                <img src={globals.productUrl + "images/" + this.state.product.imageName} alt="View"/>
                <br/><br/>
                <NavLink to="/products" > Back </NavLink>
            </div>
        );
    }
}

export default ProductDetails;
