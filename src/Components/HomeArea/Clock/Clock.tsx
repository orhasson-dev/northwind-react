import { Component } from "react";
import "./Clock.css";

interface ClockState {
	time: string;
}

class Clock extends Component<{}, ClockState> {

    private timerID = 0;

    public constructor(props: {}) {
        super(props);
        this.state = {
            time: ""
        };
    }

    public componentDidMount():void {
        this.timerID = window.setInterval(()=>{
            const now = new Date();
            this.setState({time: now.toLocaleTimeString()});
        },1000);
    }

    public render(): JSX.Element {
        return (
            <div className="Clock Box">
				<p>{this.state.time}</p>
            </div>
        );
    }

    public componentWillUnmount():void {
        window.clearInterval(this.timerID); // Stop the timer.
    }
}

export default Clock;
