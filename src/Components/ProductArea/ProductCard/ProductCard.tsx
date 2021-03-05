import "./ProductCard.css";
import {NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";
import ProductDetails from "../ProductDetails/ProductDetails";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box" >
            <div>
                {props.product.name}
                <br/>
                Price: ${props.product.price}
                <br/>
                Stock: {props.product.stock}
            </div>
            <NavLink to={"/products/details/" + props.product.id}>
          <img src={globals.productUrl + "images/" + props.product.imageName}  alt="view"/>
            </NavLink>
        </div>
    );
}

export default ProductCard;
