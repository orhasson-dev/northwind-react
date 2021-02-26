import styles from "./Hours.module.css"

function Hours(): JSX.Element {
    return (
        <div className={styles.Hours + " Box" }>
			<p className={styles.CoolText}>
                Opening Hours: 07:00 AM - 09:00 PM
            </p>
        </div>
    );
}

export default Hours;
