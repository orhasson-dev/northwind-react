import "./HugeSeller.css";
import {useState} from "react";

function HugeSeller(): JSX.Element {

    //destructuring assignment (from ES6)
    const [item,setItem] = useState<string>("");
    const [price,setPrice] = useState<number>(0);

    function showHugeSeller():void{
        // When we cool to setItem - React will render again this component (HugeSeller)
        // In Addition will return from the call useState the updated value (item).
        setItem("White Wine");
        setPrice(50);
    }

    return (
        <div className="HugeSeller Box">
			<button onClick={showHugeSeller}>Show Huge Seller</button>
            <span>{item}, Price: ${price}</span>
        </div>
    );
}

export default HugeSeller;
