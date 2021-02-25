import "./Home.css";
import Discount from "../Discount/Discount";
import Specials from "../Specials/Specials";
import Desserts from "../Desserts/Desserts";
import Sales from "../Sales/Sales";
import Recommended from "../Recommended/Recommended";
import Location from "../Location/Location";
import Bestseller from "../Bestseller/Bestseller";
import RandomProduct from "../RandomProduct/RandomProduct";
import Shoes from "../Shoes/Shoes";

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
           <Bestseller/>
            <RandomProduct/>
            <Shoes brand="Nike" size={37.5} price ={99}
                   imagePath="images/20200605-nike-06.jpg"/>
            <Shoes brand="Adidas" size={38.5} price ={98}
                   imagePath="images/asics-shoes.jpg"/>
            <Shoes brand="Puma" size={39.5} price ={97}
                   imagePath="images/61xpVxIbIVL._UL1200_.jpg"/>
            <Shoes brand="New Balance" size={40.5} price ={96}
                   imagePath="images/new_balance_shoes.jpg"/>
            <Shoes brand="Asics" size={42} price ={95}
                   imagePath="images/asics-shoes.jpg"/>
        </div>
    );
}



export default Home;
