"use client";

import Loader from "@/components/loader/Loader";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./page.module.css";
import Image from "next/image";

const Dashboard = () => {
	const session = useSession();

	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { data, mutate, isLoading, error } = useSWR(
		`/api/posts?username=${session?.data?.user?.name}`,
		fetcher,
	);

	if (session.status === "loading") {
		return <Loader />;
	}

	if (session.status === "unauthenticated") {
		router?.push("/dashboard/login");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const title = e.target[0].value;
		const img = e.target[1].value;
		const desc = e.target[2].value;

		try {
			await fetch("/api/posts", {
				method: "POST",
				body: JSON.stringify({
					title,
					desc,
					img,
					user: {
						name: session?.data?.user?.name,
						img: session?.data?.user?.image,
					},
				}),
			});
			mutate();
			e.target.reset();
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = async (id) => {
		try {
			await fetch(`/api/posts/${id}`, {
				method: "DELETE",
			});
			mutate();
		} catch (err) {
			console.log(err);
		}
	};

	if (session.status === "authenticated") {
		return (
			<div className={styles.container}>
				<div className={styles.posts}>
					{isLoading ? (
						<Loader />
					) : data?.length ? (
						data?.map((post) => (
							<div className={styles.post} key={post._id}>
								<div className={styles.imgContainer}>
									<Image
										priority={true}
										sizes='(max-width: 768px) 100vw, 768px'
										src={post.img}
										alt={post.title}
										fill={true}
										className={styles.img}
									/>
								</div>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<span
									className={styles.delete}
									onClick={() => handleDelete(post._id)}
								>
									<i className='bi bi-trash' />
								</span>
							</div>
						))
					) : (
						<h3 className={styles.noData}>
							There is no data to show! <br />
							<br /> Let&apos;s add new post now :)
						</h3>
					)}
				</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<h2 className={styles.formTitle}>Add New Post</h2>
					<input
						type='text'
						placeholder='Title'
						className={styles.input}
						required
					/>
					<input type='text' placeholder='Image Url' className={styles.input} />
					<textarea
						cols='30'
						rows='10'
						placeholder='Description'
						className={styles.textArea}
					/>
					<button className={styles.btn}>
						Save Post <i className='bi bi-clipboard-check'></i>
					</button>
				</form>
			</div>
		);
	}
};

export default Dashboard;
