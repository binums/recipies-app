import React from "react";
import { Link } from "react-router-dom";
import logoLite from "../images/Flavr_logo-lite.png";

const SplashScreen = () => {
	return (
		<Link to="/auth" className="splashscreen__container">
			<div className="splashcsreen__image-container">
				<img src={logoLite} alt="logo" />
			</div>
		</Link>
	);
};

export default SplashScreen;
