import { Component } from "react";
import "./RandomProduct.css";

interface RandomProductState {
    products: string[];
    randomProduct:string;
}

class RandomProduct extends Component<{}, RandomProductState> {


    // Constructor - Object has been created
    public constructor(props: {}) {
        super(props);
        this.state = { products:["shirt","food","drink","iPhone12","Note20"], randomProduct: ""}; // Init the state.

    }

    // componentDidMount - Object is ready for use:
    public componentDidMount(): void {
        setInterval(() => {
            const rand = Math.floor(Math.random() * this.state.products.length);
            this.setState({randomProduct: this.state.products[rand]})
        }, 1000)
    }


    public render(): JSX.Element {
        return (
            <div className="RandomProduct Box">
				<span>{this.state.randomProduct}</span>
            </div>
        );
    }
}



export default RandomProduct;
