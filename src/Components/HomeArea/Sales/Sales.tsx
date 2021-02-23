import "./Sales.css";

// Creating props exact type
interface SalesProps{
    percent: number;
    category: string;
}

function Sales(props: SalesProps): JSX.Element {
    return (
        <div className="Sales Box">
			<p>Sales: {props.percent}% off on all {props.category}!</p>
        </div>
    );
}

export default Sales;
