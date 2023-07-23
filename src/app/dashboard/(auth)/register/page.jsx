"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { signIn, useSession } from "next-auth/react";
import Loader from "@/components/loader/Loader";

const Register = () => {
	const session = useSession();
	const router = useRouter();
	const [err, setErr] = useState(null);

	if (session.status === "loading") {
		return <Loader />;
	}

	if (session.status === "unauthenticated") {
		router?.push("/dashboard/register");
	}

	if (session.status === "authenticated") {
		toast.success("You Are Sign In Successfully");
		router?.push("/dashboard");
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		const name = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;

		try {
			const res = await fetch("/api/auth/register", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ name, email, password }),
			});
			res.status === 201 &&
				(toast.success("Account has been created"),
				router.push("/dashboard/login?success=Account has been created"));
		} catch (err) {
			setErr(err);
		}
	};

	return (
		<div className={styles.container}>
			<h1>Create new account</h1>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Username'
					className={styles.input}
					required
				/>
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
					Register
					<i className='bi bi-person-add' style={{ fontSize: 20 + "px" }}></i>
				</button>
			</form>
			<h5 style={{ margin: 0 }}>- OR -</h5>
			<button className={styles.btn} onClick={() => signIn("google")}>
				Continue with Google
			</button>
			{err && <p style={{ color: "red" }}>{err.message}</p>}
			<Link href={"/dashboard/login"} className={styles.link}>
				Login with an existing account?
			</Link>
		</div>
	);
};

export default Register;
