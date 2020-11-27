import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import NavBar from "../components/NavBar";
import { BsFillBellFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import HomeScroll from "../components/HomeScroll";
import withAuth from "../utils/withAuth";
import scrollList from "../Data/scrollList";
import recipeList from "../Data/recipeList";
import RecipeCard from "../components/RecipeCard";
import Notifications from "../components/Notifications";
import Search from "../components/Search";

const Home = () => {
	const [showNotifications, setShowNotifications] = useState(false);
	const [showSearch, setShowSearch] = useState(false);

	return (
		<>
			<Notifications
				showNotifications={showNotifications}
				setShowNotifications={setShowNotifications}
			/>
			<Search
				showSearch={showSearch}
				setShowSearch={setShowSearch}
				type="recipes"
			/>
			<div className="dashboard__container">
				<div className="home__container">
					<div className="home__top-nav">
						<IconContext.Provider value={{ size: "1.5rem" }}>
							<div className="home__notification-bell">
								<div className="home__notification-bell--active">
									<BsFillBellFill
										onClick={() => {
											setTimeout(() => {
												setShowNotifications(true);
												setShowSearch(false);
											}, 150);
										}}
									/>
								</div>
							</div>
						</IconContext.Provider>
						<p className="dashboard__title">FLAVR</p>
						<IconContext.Provider value={{ size: "1.5rem" }}>
							<div className="home__search">
								<div className="home__search--active">
									<FiSearch
										onClick={() => {
											setTimeout(() => {
												setShowSearch(true);
												setShowNotifications(false);
											}, 150);
										}}
									/>
								</div>
							</div>
						</IconContext.Provider>
					</div>
					<div className="home__y-scroll">
						<div className="home__side-scroll">
							<HomeScroll scrollList={scrollList} />
						</div>
						<div className="home__recipe-cards">
							<div className="recipe-car__container">
								{recipeList.map((recipe, i) => {
									return <RecipeCard recipe={recipe} key={i} />;
								})}
							</div>
						</div>
					</div>
				</div>
				<NavBar selected="home" className="home__nav-bar" />
			</div>
		</>
	);
};

export default withAuth(Home);
