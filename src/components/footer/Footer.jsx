"use client";

import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div>©2023 Abdelazim. All rights reserved.</div>
			<div className={styles.social}>
				<Link href='https://facebook.com' target='_blank'>
					<Image
						src='/1.png'
						width={16}
						height={16}
						className={styles.icon}
						alt='facebook'
					/>
				</Link>

				<Link href='https://instagram.com' target='_blank'>
					<Image
						src='/2.png'
						width={16}
						height={16}
						className={styles.icon}
						alt='instagram'
					/>
				</Link>

				<Link href='https://twitter.com' target='_blank'>
					<Image
						src='/3.png'
						width={16}
						height={16}
						className={styles.icon}
						alt='twitter'
					/>
				</Link>

				<Link href='https://youtube.com' target='_blank'>
					<Image
						src='/4.png'
						width={16}
						height={16}
						className={styles.icon}
						alt='youtube'
					/>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
