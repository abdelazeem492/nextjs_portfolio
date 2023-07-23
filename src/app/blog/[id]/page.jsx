import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
	const res = await fetch(`${process.env.LOCATION_ORIGIN}/api/posts/${id}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		return notFound();
	}

	return res.json();
}

export async function generateMetadata({ params }) {
	const post = await getData(params.id);
	return {
		title: `Abdelazim - ${post.title}`,
		description: post.desc,
	};
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>{data.title}</h1>
					<p className={styles.desc}>{data.desc}</p>
					<div className={styles.author}>
						<Image
							src={data.user.img || "/user.png"}
							alt={data.user.name}
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>{data.user.name}</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={data.img}
						alt={data.title}
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>{data.content}</p>
			</div>
		</div>
	);
};

export default BlogPost;
