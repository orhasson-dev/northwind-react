import "./NotFound.css";

function NotFound(): JSX.Element {
    return (
        <div className="NotFound">
			<p> The Page you are looking for doesn't exist.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=1" allow="autoplay" title="Page not Found"/>

        </div>
    );
}

export default NotFound;
