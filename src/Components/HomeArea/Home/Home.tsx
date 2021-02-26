import "./Home.css";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Desserts from "../Desserts/Desserts";
import Sales from "../Sales/Sales";
import Recommended from "../Recommended/Recommended";
import Location from "../Location/Location";
import Bestseller from "../Bestseller/Bestseller";
import RandomProduct from "../RandomProduct/RandomProduct";
import Search from "../Search/Search";
import Address from "../Address/Address";


function Home(): JSX.Element {
    return (
        <div className="Home">

            {/*Interpolation:*/}
			<Discount/>

			{/*Conditional Rendering: */}
            <Specials/>

            {/*Displaying Lists*/}
            <Desserts/>

            {/* Props: */}
            <Sales percent={10} category="Beverages"/>
            <Sales percent={15}/>

            {/* Events: */}
           <Recommended/>
           <Location/>

           {/*State Class Component*/ }
           <Bestseller/>
           <RandomProduct/>

           {/*Two-Way Binding: */}
           <Search/>

           {/*Dynamic Styling:*/}
           <Address/>

        </div>
    );
}



export default Home;
