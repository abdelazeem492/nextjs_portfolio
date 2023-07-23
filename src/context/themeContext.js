"use client";

import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState(
		global?.window?.localStorage.getItem("mode") || "dark",
	);

	const toggle = () => {
		setMode((prev) => {
			return prev === "dark" ? "light" : "dark";
		});
	};
	return (
		<ThemeContext.Provider value={{ toggle, mode }}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	);
};