import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";


export const metadata = {
	title: "Abdelazim - About",
	description: "Abdelazim About Page",
};

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
					alt='about image'
					fill={true}
					className={styles.img}
				/>

				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcrafting award winning digital experiences
					</h2>
				</div>
			</div>

			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Are We?</h1>
					<p className={styles.desc}>
						Magna fusce magna leo tincidunt felis ipsum placerat congue massa
						bibendum quam et arcu condimentum diam sit adipiscing commodo
						bibendum magna morbi urna massa nulla et euismod elit purus
						bibendum. Metus et scelerisque diam phasellus metus nisl aliquam
						<br />
						<br />
						orci fusce condimentum diam hendrerit nunc tortor vel cursus lacus
						varius dolor morbi orci orci elit tristique nisi cursus urna amet
						diam. Amet quisque massa tristique id gravida lacus dolor et euismod
					</p>
				</div>

				<div className={styles.item}>
					<h1 className={styles.title}>What We Do?</h1>
					<p className={styles.desc}>
						Consectetur tincidunt rutrum eros tempus scelerisque aliquam lacus
						quis massa metus condimentum placerat lorem mi diam arcu aliquam sed
						sed eu tortor lacus maximus portaest leo consectetur ex sit eget.
						<br />
						<br />
						- Dynamic Websites
						<br />
						<br />
						- Fast and Handy
						<br />
						<br />- Mobile Apps
					</p>
					<Button
						content={"contact"}
						path={"/contact"}
						icon={"bi bi-headset"}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
