import "./ProductCard.css";
import ProductModel from "../../../Models/ProductModel";
import globals from "../../../Services/Globals";

interface ProductCardProps {
    product: ProductModel;
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard Box">
            <div>
                {props.product.name}
                <br/>
                Price: ${props.product.price}
                <br/>
                Stock: {props.product.stock}
            </div>
          <img src={globals.productUrl + "images/" + props.product.imageName} />
        </div>
    );
}

export default ProductCard;
