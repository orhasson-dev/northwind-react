import {Component} from "react";
import "./ProductList.css";
import ProductModel from "../../../Models/ProductModel";
import axios from "axios";
import globals from "../../../Services/Globals";
import ProductCard from "../ProductCard/ProductCard";

interface ProductListState {
    products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
            products: []
        };
    }


    // We have to install "npm i -g northwind-back-end"
    // Then We have to open new terminal and start the northwind server by "northwind" command
    public async componentDidMount() {
        try {
            const response = await axios.get<ProductModel[]>(globals.productUrl);
            this.setState({products: response.data});
        } catch (err) {
            console.log(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
                {this.state.products.map((item) => <ProductCard product={item} key={item.id}/>)}
            </div>
        )
    }
}

export default ProductList;
