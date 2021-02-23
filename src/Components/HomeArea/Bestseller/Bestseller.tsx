import { Component } from "react";
import "./Bestseller.css";

class Bestseller extends Component {

    private item = "";
    private price = 0;

    private showBestSeller = () => {
        // Get data of the bestseller from the server...
        this.item = "Irish Coffee";
        this.price = 9.5;
        alert(this.item + ", " + "price: " + this.price );
    }

    public render(): JSX.Element {
        return (
            <div className="Bestseller Box">
				<button onClick={this.showBestSeller}>Show Bestseller Product</button>
            </div>
        );
    }
}

export default Bestseller;
