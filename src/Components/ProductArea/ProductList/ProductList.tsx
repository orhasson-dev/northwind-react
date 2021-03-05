import { Component } from "react";
import "./ProductList.css";
import ProductModel from "../../../Models/ProductModel";

interface ProductListState {
	products: ProductModel[];
}

class ProductList extends Component<{}, ProductListState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			
        };
    }

    public render(): JSX.Element {
        return (
            <div className="ProductList">
				<h2> Products Page </h2>
            </div>
        );
    }
}

export default ProductList;
