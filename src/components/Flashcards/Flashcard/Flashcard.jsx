import styles from "./Flashcard.module.css";

export default function Flashcard({ question, answer }) {
	return (
		<>
			<div className={styles.flashcard}>
				<p className={styles.emoji}>🤔</p>
				<p className={styles.text}>{question} </p>
			</div>

			<div className={styles.flashcard}>
				<p className={styles.emoji}>🤔</p>
				<p className={styles.text}>{answer} </p>
			</div>
		</>
	);
}
