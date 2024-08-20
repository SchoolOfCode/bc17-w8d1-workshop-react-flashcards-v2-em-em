import styles from './Flashcards.module.css';
import Flashcard from './Flashcard/Flashcard';


export default function Flashcards({questioncards}) {
	console.log(questioncards)
    return (
			<section className={styles.flashcardsContainer}>
				<ul className={styles.flashcardsList}>
					{questioncards.map((card) => {
						return <Flashcard key={card.question + card.answer} question={card.question} answer={card.answer} />
					})}
				</ul>
			</section>
		);
}