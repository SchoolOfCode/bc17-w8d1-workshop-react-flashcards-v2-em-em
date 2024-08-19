import styles from './Flashcard.module.css';

export default function Flashcard () {
    return (
        <div className = {styles.flashcard}>
            <p className = {styles.emoji}>🤔</p>
            <p className = {styles.text}>What is JSX?</p>
        </div>
    );
}