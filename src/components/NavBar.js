import ic_favorites_grey from "../images/Menu/ic_favorites_grey.svg";
import ic_favorites from "../images/Menu/ic_favorites.svg";
import ic_home_grey from "../images/Menu/ic_home_grey.svg";
import ic_home from "../images/Menu/ic_home.svg";
import ic_profile_grey from "../images/Menu/ic_profile_grey.svg";
import ic_profile from "../images/Menu/ic_profile.svg";
import ic_recipes_grey from "../images/Menu/ic_recipes_grey.svg";
import ic_recipes from "../images/Menu/ic_recipes.svg";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const NavBar = ({ selected }) => {
	const [currentNav, setCurrentNav] = useState(selected);
	const history = useHistory();

	const navList = [
		{
			name: "home",
			activeSrc: ic_home,
			inactiveSrc: ic_home_grey,
			route: "/home",
		},
		{
			name: "recipes",
			activeSrc: ic_recipes,
			inactiveSrc: ic_recipes_grey,
			route: "/recipes",
		},
		{
			name: "favorites",
			activeSrc: ic_favorites,
			inactiveSrc: ic_favorites_grey,
			route: "/favorites",
		},
		{
			name: "profile",
			activeSrc: ic_profile,
			inactiveSrc: ic_profile_grey,
			route: "/profile",
		},
	];

	return (
		<div className="nav-bar__container">
			{navList.map((val, i) => {
				if (currentNav === val.name) {
					return (
						<div
							className={`nav-bar__item icon__${val.name} nav-bar__item--active`}
							key={i}
							onClick={() => {
								setTimeout(() => {
									history.push(val.route);
								}, 200);
							}}>
							<img src={val.activeSrc} alt={val.activeSrc} />
						</div>
					);
				} else {
					return (
						<div
							className={`nav-bar__item icon__${val.name}`}
							key={i}
							onClick={() => {
								setTimeout(() => {
									history.push(val.route);
								}, 200);
							}}>
							<img src={val.inactiveSrc} alt={val.inactiveSrc} />
						</div>
					);
				}
			})}
		</div>
	);
};

export default NavBar;
