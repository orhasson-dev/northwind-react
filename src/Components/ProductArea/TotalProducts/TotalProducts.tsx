import { Component } from "react";
import "./TotalProducts.css";
import store from "../../../Redux/Store";
import {Unsubscribe} from "redux";

interface TotalProductsState {
	totalProducts: number;
}

class TotalProducts extends Component<{}, TotalProductsState> {

    private unsubscribeMe: Unsubscribe;

    public constructor(props: {}) {
        super(props);
        this.state = {
			totalProducts: 0
        };
    }

    public componentDidMount(): void {
        this.unsubscribeMe = store.subscribe(() =>{
            this.setState({totalProducts: store.getState().productsState.products.length})
        });
    }

    public componentWillUnmount() {
        this.unsubscribeMe(); // Stop listening when the Component destroy.
    }

    public render(): JSX.Element {
        // Conditional Rendering
        if(this.state.totalProducts === 0){
            return null;
        }
        return (
            <div className="TotalProducts">
				<span>
                    We have {this.state.totalProducts} products.
                </span>
            </div>
        );
    }
}

export default TotalProducts;
