import React from "react";
import reactLogo from '../../assets/react.svg';
import styles from "./Footer.module.css";


export default function Footer () {
    return (
        <footer className={styles.footer}>
            <p>
                Built with React 
                <img src = {reactLogo} alt = 'React Logo'></img>
            </p> 
        </footer>
    );
}