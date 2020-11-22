import React from "react";
import { IconContext } from "react-icons/lib";
import NavBar from "../components/NavBar";
import { BsFillBellFill } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import ChocolatePudding from "../images/home-scroll/ChocolatePudding.png";
import FeaturedRecipe from "../images/home-scroll/FeaturedRecipe.png";
import HomeScroll from "../components/HomeScroll";
import withAuth from "../utils/withAuth";

const Home = () => {
	const scrollList = [
		{
			name: "featured-recipe",
			image: FeaturedRecipe,
		},
		{
			name: "chocolate-pudding",
			image: ChocolatePudding,
		},
		{
			name: "featured-recipe",
			image: FeaturedRecipe,
		},
		{
			name: "chocolate-pudding",
			image: ChocolatePudding,
		},
		{
			name: "featured-recipe",
			image: FeaturedRecipe,
		},
		{
			name: "chocolate-pudding",
			image: ChocolatePudding,
		},
	];

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
				<HomeScroll scrollList={scrollList} />
			</div>
			<NavBar selected="home" className="nav-bar" />
		</div>
	);
};

export default withAuth(Home);
