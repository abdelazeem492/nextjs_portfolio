"use client";

import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ content, path, icon }) => {
	return (
		<Link href={path}>
			<button className={styles.btn}>
				{content}
				{icon && <i className={icon} style={{ marginLeft: "3px" }} />}
			</button>
		</Link>
	);
};

export default Button;
