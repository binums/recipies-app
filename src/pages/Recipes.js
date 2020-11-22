import React from "react";
import NavBar from "../components/NavBar";
import withAuth from "../utils/withAuth";

const Recipes = () => {
	return (
		<div className="dashboard__container">
			<div>
				<h2>Recipes</h2>
			</div>
			<NavBar selected="recipes" className="nav-bar" />
		</div>
	);
};

export default withAuth(Recipes);
