import "./Home.css";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";

function Home(): JSX.Element {
    return (
        <div className="Home">

            {/*Interpolation:*/}
			<Discount/>

			{/*Conditional Rendering: */}
            <Specials/>
        </div>
    );
}



export default Home;
