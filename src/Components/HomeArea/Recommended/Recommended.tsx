import "./Recommended.css";

function Recommended(): JSX.Element {

    const item = "Red Wine"; //Demo for getting it from api

    function showRecommendation():void{
        alert(item);
    }

    return (
        <div className="Recommended Box">
	        <button onClick={showRecommendation}>Recommended a Product</button>
        </div>
    );
}

export default Recommended;
