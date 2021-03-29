import { useHistory } from "react-router-dom";
import { App as CapApp } from "@capacitor/app";
import { useEffect } from "react";

const AppUrlListener = () => {
	let history = useHistory();

	useEffect(() => {
		console.log("Inside AppUrlListener");
		CapApp.addListener("appUrlOpen", (data) => {
			console.log("Inside appUrlOpen");
			console.log(
				"TCL ~ file: AppUrlListener.js ~ line 5 ~ CapApp.addListener ~ data",
				data
			);
			// Example url: https://beerswift.app/tabs/tab2
			// slug = /tabs/tab2
			const slug = data.url.split(".dev").pop();
			console.log(
				"TCL ~ file: AppUrlListener.js ~ line 18 ~ CapApp.addListener ~ slug",
				slug
			);
			if (slug) {
				history.push(slug);
			}
			// If no match, do nothing - let regular routing
			// logic take over
		});
	}, []);

	return null;
};

export default AppUrlListener;
