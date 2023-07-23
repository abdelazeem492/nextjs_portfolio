import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/button/Button";

export const metadata = {
	title: "Abdelazim - Contact",
	description: "Abdelazim Contact Page",
};

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>let&apos;s keep in touch</h1>
			<div className={styles.content}>
				<div className={styles.imgContainer}>
					<Image
						src={"/contact.png"}
						alt='contact image'
						fill={true}
						sizes={"(max-width: 768px) 100vw, 768px"}
						className={styles.image}
					/>
				</div>
				<form className={styles.form}>
					<input type='text' placeholder='Name' className={styles.input} />
					<input type='text' placeholder='Email' className={styles.input} />
					<textarea
						type='text'
						placeholder='Message'
						className={styles.textarea}
						cols={30}
						rows={10}
					/>
					<Button content={"send"} path={"#"} icon={"bi bi-send"} />
				</form>
			</div>
		</div>
	);
};

export default Contact;
