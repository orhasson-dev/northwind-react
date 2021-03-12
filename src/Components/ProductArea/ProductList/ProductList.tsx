import {Component} from "react";
import "./ProductList.css";
import ProductModel from "../../../Models/ProductModel";
import axios from "axios";
import globals from "../../../Services/Globals";
import ProductCard from "../ProductCard/ProductCard";
import {Add} from "@material-ui/icons";
import {NavLink} from "react-router-dom"
import ProgressBar from "../../SharedArea/ProgressBar/ProgressBar";
import {productsDownloadedAction, ProductsState} from "../../../Redux/ProductsState";
import store from "../../../Redux/Store";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            products: store.getState().productsState.products
        };
    }


    // We have to install "npm i -g northwind-back-end"
    // Then We have to open new terminal and start the northwind server by "northwind" command
    public async componentDidMount() {
        try {
            if(this.state.products.length === 0) {
                const response = await axios.get<ProductModel[]>(globals.productUrlDelayed); // response is a wrapper.
                this.setState({products: response.data});
                store.dispatch(productsDownloadedAction(response.data))
            }
        } catch (err) {
            console.log(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
                {this.state.products.length === 0 && <ProgressBar/>}
                <NavLink className="NewProduct" to="/products/new" exact >
                <Add/>
                </NavLink>
                {this.state.products.map((item) => <ProductCard product={item} key={item.id}/>)}
            </div>
        )
    }
}

export default ProductList;
