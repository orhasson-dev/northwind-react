import "./AddProduct.css";
import { useForm } from "react-hook-form";

function AddProduct(): JSX.Element {
    return (
        <div className="AddProduct Box">
			<h2>Add new Product</h2>
            <form>
                <label>Name: </label><br/>
                <input type="text" name="text" autoFocus />
                <br/><br/>

                <label>Price: </label><br/>
                <input type="number" name="price" step="0.01" />
                <br/><br/>

                <label>Stock: </label><br/>
                <input type="number" name="stock" />
                <br/><br/>

                <button>Add</button>
            </form>
        </div>
    );
}

export default AddProduct;