import "./ProgressBar.css";
import progressBarGif from "../../../Assets/Images/ProgressBar.gif";

function ProgressBar(): JSX.Element {
    return (
        <div className="ProgressBar">
            <img src={progressBarGif} alt="Progress Bar" />
        </div>
    );
}

export default ProgressBar;
