import styles from './Flashcards.module.css';
import Flashcard from './Flashcard/Flashcard';


export default function Flashcards() {
    return (
			<section className={styles.flashcardsContainer}>
				<ul className={styles.flashcardsList}>
					<li>
						<Flashcard />
					</li>
					<li>
						<Flashcard />
					</li>
					<li>
						<Flashcard />
					</li>
				</ul>
			</section>
		);
}