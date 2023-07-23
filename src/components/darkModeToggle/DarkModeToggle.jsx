"use client";

import { useContext } from "react";
import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "./../../context/themeContext";

const DarkModeToggle = () => {
	const { toggle, mode } = useContext(ThemeContext);
	global?.window?.localStorage.setItem("mode", mode);
	return (
		<div
			className={styles.container}
			onClick={() => {
				toggle();
			}}
		>
			<div className={styles.icon}>🌙</div>
			<div className={styles.icon}>🔆</div>
			<div
				className={styles.ball}
				style={mode === "light" ? { left: 2 + "px" } : { right: 2 + "px" }}
			/>
		</div>
	);
};

export default DarkModeToggle;
