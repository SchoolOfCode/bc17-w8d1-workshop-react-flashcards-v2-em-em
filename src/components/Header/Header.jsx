import React from "react";
import reactLogo from '../../assets/react.svg'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.siteHeader}>
            <img className={styles.logo} src={reactLogo}/>
            <h1 className={styles.siteTitle}>React Flashcards</h1>
            <p>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</p>    
        </header>
    );
}