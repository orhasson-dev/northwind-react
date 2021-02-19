import "./Desserts.css";

function Desserts(): JSX.Element {

    const items = [
        {id: 1, name: "Ice Cream"},
        {id: 2, name: "Cake"},
        {id: 3, name: "Pavlova"}
        ];
    return (
        <div className="Desserts Box">
			<p>
                Our Desserts:
                {items.map(item =><span key={item.id}> {item.name} | </span>)}
            </p>
        </div>
    );
}

export default Desserts;
