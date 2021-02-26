import { Component } from "react";
import "./RandomProduct.css";

interface RandomProductState {
    products: string[];
    randomProduct:string;
}

class RandomProduct extends Component<{}, RandomProductState> {

    private timerId = 0;

    // Constructor - Object has been created
    public constructor(props: {}) {
        super(props);
        this.state = { products:["Sony Z2","Samsung Galaxy 21 Ultra","iPhone 12 Pro Max","iPhone12","Note20"],
            randomProduct: ""}; // Init the state.

    }

    // componentDidMount - Object is ready for use:
    public componentDidMount(): void {
        this.timerId = window.setInterval(() => {
            const index = Math.floor(Math.random() * this.state.products.length);
            this.setState({ randomProduct: this.state.products[index] });
        }, 1000);
    }



    public render(): JSX.Element {
        return (
            <div className="RandomProduct Box">
				<span>{this.state.randomProduct}</span>
            </div>
        );
    }

    // componentDidUpdate - Component state or props has been changed
    public componentDidUpdate(): void{

    }

    // componentWillUnmount: the component is about to be destroyed
    public componentWillUnmount(): void {
        clearInterval(this.timerId);
    }

}



export default RandomProduct;
