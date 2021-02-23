import "./Home.css";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Desserts from "../Desserts/Desserts";
import Sales from "../Sales/Sales";
import Slogan from "../Slogan/Slogan";
import Recommended from "../Recommended/Recommended";
import Location from "../Location/Location";

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
        </div>
    );
}



export default Home;
