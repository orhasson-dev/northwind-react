import { Component} from "react";
import "./Shoes.css";



interface ShoesProps {
	brand: string;
	size: number;
	price: number;
	imagePath: string;
}



class Shoes extends Component<ShoesProps> {

    public render(): JSX.Element {

        return (
            <div className="Shoes Box">
                <p>Brand: {this.props.brand}</p>
                <p>Size: {this.props.size}</p>
                <p>Price: {this.props.price}$</p>
                <img  src={this.props.imagePath} width={200} height={200}  />
            </div>
        );
    }
}

export default Shoes;
