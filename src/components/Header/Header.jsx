import React from "react";
import reactLogo from '../../assets/react.svg'
import styles from "./Header.module.css"

export default function Header() {
    return (
        <header className={styles.siteHeader}><img src={reactLogo}/></header>
    );
}