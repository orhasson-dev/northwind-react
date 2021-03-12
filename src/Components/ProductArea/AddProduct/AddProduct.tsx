import "./AddProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import axios from "axios";
import globals from "../../../Services/Globals";
import { useHistory } from "react-router-dom";
import store from "../../../Redux/Store";
import {productsAddedAction} from "../../../Redux/ProductsState";

function AddProduct(): JSX.Element {


    const history = useHistory();
    const { register, handleSubmit, errors} =  useForm<ProductModel>();

    async function addProduct(product: ProductModel){
        // send the product to the server...
        try{
            const res = await axios.post<ProductModel>(globals.productUrl, convertToFormData(product));
            const addedProduct = res.data; // The added product in the backend
            store.dispatch(productsAddedAction(addedProduct));
            console.log("Product has been added. ID: " + addedProduct.id);
            history.push("/products"); //Go to that route!
        }
        catch(err){
            alert("Error: "+ err);
        }
    }

    //Using static since useForm create literal object type.
    function convertToFormData(product: ProductModel): FormData {
        const myFormData = new FormData();
        myFormData.append("name",product.name);
        myFormData.append("price",product.price.toString());
        myFormData.append("stock",product.stock.toString());
        myFormData.append("image",product.image.item(0));

        return myFormData;
    }

    return (
        <div className="AddProduct Box">
			<h2>Add new Product</h2>
            <form onSubmit={handleSubmit(addProduct)}>
                <label>Name: </label><br/>
                <input type="text" name="name" autoFocus ref={register({required: true, minLength: 3})} />

                {/*Adding errors with Optional Chaining */}
                {errors.name?.type === "required" && <><br/> <span>Missing name's value.</span></>}
                {errors.name?.type === "minLength" && <><br/> <span>Name too short.</span></>}

                <br/><br/>

                <label>Price: </label><br/>
                <input type="number" name="price" step="0.01" ref={register({required: true,min:0 })} />
                {errors.price?.type === "required" && <><br/> <span>Missing price's value.</span></>}
                {errors.price?.type === "min" && <><br/> <span>Price cannot be Negative</span></>}
                <br/><br/>

                <label>Stock: </label><br/>
                <input type="number" name="stock" ref={register({required: true, min:0})} />
                {errors.stock?.type === "required" && <><br/> <span>Missing stock's value.</span></>}
                {errors.stock?.type === "min" && <><br/> <span>Stock cannot be Negative</span></>}
                <br/><br/>

                <label>Image: </label> <br/>
                <input type="file" name="image"  accept="image/*" ref={register({required: true})}/>
                {errors.image?.type === "required" && <><br/> <span>Missing Image.</span></>}
                <br/><br/>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
