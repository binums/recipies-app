import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import NavBar from "../components/NavBar";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/Search";
import { favList } from "../Data/recipeList";
import withAuth from "../utils/withAuth";

const Favorites = () => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<>
			<Search
				showSearch={showSearch}
				setShowSearch={setShowSearch}
				type="favorites"
			/>
			<div className="dashboard__container">
				<div className="favorites__container">
					<div className="favorites__top-nav">
						<div></div>
						<p className="dashboard__title">FAVORITES</p>
						<IconContext.Provider value={{ size: "1.5rem" }}>
							<div className="favorites__search">
								<div className="favorites__search--active">
									<FiSearch
										onClick={() => {
											setTimeout(() => {
												setShowSearch(true);
											}, 150);
										}}
									/>
								</div>
							</div>
						</IconContext.Provider>
					</div>
					<div className="recipe-car__container favorites__content">
						{favList.map((recipe, i) => {
							return <RecipeCard recipe={recipe} key={i} />;
						})}
					</div>
				</div>
				<NavBar selected="favorites" className="nav-bar" />
			</div>
		</>
	);
};

export default withAuth(Favorites);
