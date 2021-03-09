import "./AddProduct.css";
import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import axios from "axios";
import globals from "../../../Services/Globals";
import { useHistory } from "react-router-dom";

function AddProduct(): JSX.Element {


    const history = useHistory();
    const { register, handleSubmit} =  useForm<ProductModel>();

    async function addProduct(product: ProductModel){
        // send the product to the server...
        try{
            const res = await axios.post<ProductModel>(globals.productUrl,ProductModel.convertToFormData(product));
            const addedProduct = res.data; // The added product in the backend
            console.log("Product has been added. ID: " + addedProduct.id);
            history.push("/products"); //Go to that route!
        }
        catch(err){
            alert("Error: "+ err);
        }
    }

    return (
        <div className="AddProduct Box">
			<h2>Add new Product</h2>
            <form onSubmit={handleSubmit(addProduct)}>
                <label>Name: </label><br/>
                <input type="text" name="name" autoFocus ref={register} />
                <br/><br/>

                <label>Price: </label><br/>
                <input type="number" name="price" step="0.01" ref={register} />
                <br/><br/>

                <label>Stock: </label><br/>
                <input type="number" name="stock" ref={register}  />
                <br/><br/>

                <label>Image: </label> <br/>
                <input type="file" name="image"  accept="image/*" ref={register}/>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;
