import React from "react";
import { IconContext } from "react-icons/lib";
import NavBar from "../components/NavBar";
import { BsFillBellFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import HomeScroll from "../components/HomeScroll";
import withAuth from "../utils/withAuth";
import scrollList from "../Data/scrollList";
import recipeList from "../Data/recipeList";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
	return (
		<div className="dashboard__container">
			<div className="home__container">
				<div className="home__top-nav">
					<IconContext.Provider value={{ size: "1.5rem" }}>
						<BsFillBellFill />
					</IconContext.Provider>
					<p className="dashboard__title">FLAVR</p>
					<IconContext.Provider value={{ size: "1.5rem" }}>
						<BiSearchAlt2 />
					</IconContext.Provider>
				</div>
				<div className="home__y-scroll">
					<div className="home__side-scroll">
						<HomeScroll scrollList={scrollList} />
					</div>
					<div className="home__recipe-cards">
						<RecipeCard recipeList={recipeList} />
					</div>
				</div>
			</div>
			<NavBar selected="home" className="home__nav-bar" />
		</div>
	);
};

export default withAuth(Home);
