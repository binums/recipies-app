import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import recipeList from "../Data/recipeList";
import RecipeCard from "./RecipeCard";

const Search = ({ showSearch, setShowSearch }) => {
	console.log(
		"TCL ~ file: Search.js ~ line 8 ~ Search ~ showSearch",
		showSearch
	);
	const searchContainerRef = useRef(null);
	const [keyword, setKeyword] = useState("");

	useEffect(() => {
		if (
			searchContainerRef &&
			searchContainerRef.current &&
			searchContainerRef.current.classList
		) {
			if (showSearch) {
				searchContainerRef.current.classList.add("search__container--active");
			} else {
				searchContainerRef.current.classList.remove(
					"search__container--active"
				);
			}
		}
		if (!showSearch) {
			setKeyword("");
		}
	}, [showSearch]);

	return (
		<div className="search__container" ref={searchContainerRef}>
			<div className="search__top-nav">
				<input
					type="text"
					value={keyword}
					className="search__input"
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<div className="search__actions--container">
					<IconContext.Provider
						value={{ size: "1.5rem" }}
						className="search__close--container">
						<div className="search__actions search__close">
							<div className="search__actions--active">
								<GrClose
									onClick={() => {
										setTimeout(() => {
											setShowSearch(false);
										}, 150);
									}}
								/>
							</div>
						</div>
					</IconContext.Provider>
				</div>
			</div>
			<div className="search__content--container">
				<div className="recipe-car__container search__content">
					{recipeList.map((val, i) => {
						if (keyword) {
							if (val.name.toLowerCase().includes(keyword.toLowerCase())) {
								return <RecipeCard recipe={val} key={i} className />;
							}
						} else {
							return <RecipeCard recipe={val} key={i} />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Search;
