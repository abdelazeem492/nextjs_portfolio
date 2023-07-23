import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
	const data = items[cat];
	if (data) return data;
	return notFound();
};

export async function generateMetadata({ params }) {
	return {
		title: `Abdelazim - ${params.category}`,
	};
}

const Category = ({ params }) => {
	const data = getData(params.category);
	return (
		<div className={styles.container}>
			<h2 className={styles.catTitle}>{params.category}</h2>
			{data.map((item) => (
				<div className={styles.item} key={item.id}>
					<div className={styles.content}>
						<h3 className={styles.title}>{item.title}</h3>
						<p className={styles.desc}>{item.desc}</p>
						<Button content={"see more"} path={"#"} />
					</div>
					<div className={styles.imgContainer}>
						<Image
							className={styles.img}
							fill={true}
							src={item.image}
							sizes='( max-width: 768px ) 100vw, 768px'
							alt={`${item.title} image`}
							loading='lazy'
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default Category;
