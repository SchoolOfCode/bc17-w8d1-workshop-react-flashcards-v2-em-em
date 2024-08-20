import {useState} from "react";
import styles from "./Flashcard.module.css";

export default function Flashcard({ question, answer }) {

	const [isFlipped, setIsFlipped] = useState(false);
	function handleClick() {
		setIsFlipped(!isFlipped);
	}
	return (
		<>
		{isFlipped ? (
		<li onClick={handleClick}> 
			<div className={styles.question}>
				<p className={styles.emoji}>🤔</p>
				<p className={styles.text}>{question}</p>
			</div>
		</li>
	) : (
		 <li onClick={handleClick}>
			<div className={styles.answer}>
				<p className={styles.emoji}>🤯</p>
				<p className={styles.text}>{answer}</p>
			</div>
		</li>)
		}
		</>
	);
}