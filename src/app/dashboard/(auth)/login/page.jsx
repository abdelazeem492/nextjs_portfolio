"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Loader from "@/components/loader/Loader";
import { toast } from "react-toastify";

const Login = () => {
	const session = useSession();
	const router = useRouter();

	if (session.status === "loading") {
		return <Loader />;
	}

	if (session.status === "unauthenticated") {
		router?.push("/dashboard/login");
	}

	if (session.status === "authenticated") {
		toast.success("You Are Logged In Successfully");
		router?.push("/dashboard");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;

		signIn("credentials", {
			email,
			password,
		});
	};

	return (
		<div className={styles.container}>
			<h1>Login to Your Account</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type='email'
					placeholder='Email'
					className={styles.input}
					required
				/>
				<input
					type='password'
					placeholder='Password'
					className={styles.input}
					required
				/>
				<button className={styles.btn}>
					Login
					<i
						className='bi bi-box-arrow-in-right'
						style={{ fontSize: "20px", margin: "0 3px" }}
					></i>
				</button>
			</form>

			<h5 style={{ margin: 0 }}>- OR -</h5>
			<button className={styles.btn} onClick={() => signIn("google")}>
				Login with Google
			</button>
			<Link href={"/dashboard/register"} className={styles.link}>
				Don&apos;t Have account? Register now.
			</Link>
		</div>
	);
};

export default Login;
