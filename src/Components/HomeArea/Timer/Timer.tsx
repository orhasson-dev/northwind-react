import { Component } from "react";
import "./Timer.css";

interface TimerClockState {

    currentTime:string;
}

class Timer extends Component<{}, TimerClockState> {
    public constructor(props: {}) {
        super(props);
        this.state = {currentTime: ""}; // Init the state.
        this.showTime();
    }
    public render(): JSX.Element {
        return (
            <div className="Timer Box">
                <span>{this.state.currentTime}</span>
            </div>
        );
    }


    private showTime = () =>{
        setInterval(() => {
            const theTime =   new Date().toLocaleTimeString();
            this.setState({currentTime: theTime})
        }, 1000)
    }
}


export default Timer;
