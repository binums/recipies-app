import { useEffect, useRef, useState } from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons/lib";
import recipeList from "../Data/recipeList";
import RecipeCard from "./RecipeCard";

const Search = ({ showSearch, setShowSearch, type, categoryId }) => {
	const searchContainerRef = useRef(null);
	const [keyword, setKeyword] = useState("");
	const [noResult, setNoResult] = useState(true);

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

	useEffect(() => {
		if (keyword) setNoResult(true);
	}, [keyword]);

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
			<div className="recipe-car__container search__content">
				{recipeList.map((val, i) => {
					if (keyword) {
						if (
							val.name.toLowerCase().includes(keyword.toLowerCase().trim()) &&
							(type === "recipes" ||
								(type === "favorites" && val.isFav === true) ||
								(type === "category" && val.categoryId == categoryId))
						) {
							if (noResult) setNoResult(false);
							return <RecipeCard recipe={val} key={i} className />;
						}
					} else {
						if (
							type === "recipes" ||
							(type === "favorites" && val.isFav === true) ||
							(type === "category" && val.categoryId == categoryId)
						) {
							return <RecipeCard recipe={val} key={i} />;
						}
					}
				})}
			</div>
			{noResult && keyword && (
				<div className="search__no-result">No Result</div>
			)}
		</div>
	);
};

export default Search;
