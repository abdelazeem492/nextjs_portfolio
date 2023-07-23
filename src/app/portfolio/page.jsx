import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
	title: "Abdelazim - Portfolio",
	description: "Abdelazim Portfolio Page",
};

const Portfolio = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Choose a gallery</h2>
			<div className={styles.items}>
				<Link href={"/portfolio/illustrations"} className={styles.item}>
					<span className={styles.itemTitle}>illustrations</span>
				</Link>

				<Link href={"/portfolio/websites"} className={styles.item}>
					<span className={styles.itemTitle}>websites</span>
				</Link>

				<Link href={"/portfolio/applications"} className={styles.item}>
					<span className={styles.itemTitle}>applications</span>
				</Link>
			</div>
		</div>
	);
};

export default Portfolio;
