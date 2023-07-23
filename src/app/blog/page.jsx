import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
	title: "Abdelazim - Blog",
	description: "Abdelazim Blog Page",
};

async function getData() {
	const res = await fetch(
		`${process.env.LOCATION_ORIGIN || "http://localhost:3000"}/api/posts`,
		{
			cache: "no-store",
		},
	);

	if (!res.ok) {
		throw new Error("Failed to fetch posts");
	}

	return res.json();
}

const Blog = async () => {
	const data = await getData();
	return (
		<div>
			{data.map((item) => (
				<Link
					href={`blog/${item._id}`}
					className={styles.container}
					key={item._id}
				>
					<div className={styles.imgContainer}>
						<Image
							src={item.img}
							alt={item.title}
							width={400}
							height={250}
							className={styles.img}
						/>
					</div>
					<div className={styles.content}>
						<h3 className={styles.title}>{item.title}</h3>
						<p className={styles.desc}>{item.desc.slice(0, 200)}</p>
						<button className={styles.btn}>See more</button>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;
