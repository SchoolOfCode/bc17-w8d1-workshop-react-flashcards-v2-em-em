import styles from './Flashcards.module.css';


export default function Flashcards() {
    return (
			<section className={styles.flashcardsContainer}>
				<ul className={styles.flashcardList}>
					<li>
						<h2>Flashcard</h2>
					</li>
					<li>
						<h2>Flashcard</h2>
					</li>
					<li>
						<h2>Flashcard</h2>
					</li>
				</ul>
			</section>
		);
}