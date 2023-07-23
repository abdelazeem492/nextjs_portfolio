"use client";

import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
	{
		id: 1,
		title: "Home",
		path: "/",
	},
	{
		id: 2,
		title: "About",
		path: "/about",
	},
	{
		id: 3,
		title: "Blog",
		path: "/blog",
	},
	{
		id: 4,
		title: "Portfolio",
		path: "/portfolio",
	},
	{
		id: 5,
		title: "Contact",
		path: "/contact",
	},
	{
		id: 6,
		title: "Dashboard",
		path: "/dashboard",
	},
];

const Navbar = () => {
	const session = useSession();

	const [open, setOpen] = useState(0);

	const currentPathName = usePathname();

	return (
		<header className={styles.container}>
			<Link href={"/"} className={styles.logo}>
				Abdelazim
			</Link>
			<div
				className={styles.toggle}
				onClick={() => {
					setOpen((prev) => !prev);
				}}
			>
				{open ? (
					<i className='bi bi-x-lg' style={{ fontSize: 32 }}></i>
				) : (
					<i className='bi bi-list' style={{ fontSize: 36 }}></i>
				)}
			</div>
			<nav
				className={styles.links}
				style={open ? { right: 0 } : { right: "-100%" }}
			>
				<DarkModeToggle />
				{links.map((link) => (
					<Link
						href={link.path}
						key={link.id}
						className={styles.link}
						style={
							currentPathName === link.path && {
								color: "#34bb78",
								borderColor: "#34bb78",
							}
						}
						onClick={() => setOpen(false)}
					>
						{link.title}
					</Link>
				))}
				{session.status === "authenticated" && (
					<button
						className={styles.logout}
						onClick={() => {
							signOut();
						}}
					>
						Logout <i className='bi bi-box-arrow-right' />
					</button>
				)}
			</nav>
		</header>
	);
};

export default Navbar;
