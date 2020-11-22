import React from "react";
import NavBar from "../components/NavBar";
import withAuth from "../utils/withAuth";

const Favorites = () => {
	return (
		<div className="dashboard__container">
			<div>
				<h2>Favorites</h2>
			</div>
			<NavBar selected="favorites" className="nav-bar" />
		</div>
	);
};

export default withAuth(Favorites);
