import "./About.css";

function About(): JSX.Element {

    function getSummary(arr: number[]){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum+= arr[i];
        }
        return sum;
    }

    function showSummary(): void{
        setTimeout(()=>{
            const array = [11,22,33,44];
            const sum = getSummary(array);
            alert(sum);
        },5000)
    }

    return (
        <div className="About">
			<h2> About Page</h2>
            <button onClick={showSummary}>Show Summary</button>
        </div>
    );
}

export default About;
