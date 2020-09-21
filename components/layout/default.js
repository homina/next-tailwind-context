import React, { useState } from "react";
import { UserContext } from "../../context";

export default function LayoutDefault({ children }) {
	const [token, setToken] = useState(
		process.browser ? localStorage.getItem("token") : "",
	);

	return (
		<UserContext.Provider value={{ token, setToken }}>
			{children}
		</UserContext.Provider>
	);
}
