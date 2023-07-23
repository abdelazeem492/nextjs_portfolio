"use client";
import styles from "./loader.module.css";

const Loader = () => {
	return (
		<div className={styles.loader}>
			<div className={styles.box} />
			<div className={styles.box} />
			<div className={styles.box} />
			<div className={styles.box} />
		</div>
	);
};

export default Loader;
