import "./Home.css";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Desserts from "../Desserts/Desserts";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/*Interpolation:*/}
			<Discount/>

			{/*Conditional Rendering: */}
            <Specials/>

            {/*Displaying Lists*/}
            <Desserts/>
        </div>
    );
}



export default Home;
