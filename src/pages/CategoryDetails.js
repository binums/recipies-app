import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Search from "../components/Search";
import { getCategoryById } from "../Data/categoryList";
import { getRecipeByCategory } from "../Data/recipeList";

const CategoryDetails = ({ match, location }) => {
	const [categoryMeta, setCategoryMeta] = useState();
	const [categoryList, setCategoryList] = useState([]);
	const [showSearch, setShowSearch] = useState(false);
	const history = useHistory();

	useEffect(() => {
		if (history) {
			let temp = getCategoryById(match.params.id);
			setCategoryMeta({ ...temp[0] });
			let localCategoryList = getRecipeByCategory(match.params.id);
			setCategoryList(localCategoryList);
		}
	}, [history]);

	if (categoryList?.length && categoryMeta) {
		return (
			<>
				<Search
					showSearch={showSearch}
					setShowSearch={setShowSearch}
					type="category"
					categoryId={match.params.id}
				/>
				<div className="category-details__container">
					<div className="category-details__header">
						<div
							className="category-details__header-top"
							style={{
								background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${categoryMeta.image}) no-repeat center/cover`,
							}}>
							<div className="category-details__go-back">
								<IconContext.Provider
									value={{ size: "1.5rem", color: "white" }}>
									<div className="category-details__go-back--active">
										<BiArrowBack
											onClick={() => {
												setTimeout(() => {
													if (location?.state?.from) {
														history.push(
															location.state.from[
																location.state.from.length - 1
															]
														);
													} else {
														history.push("/home");
													}
												}, 150);
											}}
										/>
									</div>
								</IconContext.Provider>
							</div>
							<div className="category-details__search">
								<IconContext.Provider
									value={{ size: "1.5rem", color: "white" }}>
									<div className="category-details__search--active">
										<FiSearch
											onClick={() => {
												setTimeout(() => {
													setShowSearch(true);
												}, 150);
											}}
										/>
									</div>
								</IconContext.Provider>
							</div>
						</div>
						<div className="category-details__header--bottom">
							<div className="category-details__details">
								<p className="category-details__category">CATEGORY</p>
								<p className="category-details__name">{categoryMeta.name}</p>
							</div>
							<div className="category-details__bottom-bar">
								<p className="category-details__bottom-bar--text">
									{categoryList.length} recipes
								</p>
							</div>
						</div>
					</div>
					<div className="recipe-car__container category-details__content">
						{categoryList.map((recipe, i) => {
							return <RecipeCard recipe={recipe} key={i} />;
						})}
						{!categoryList.length && (
							<div className="favorites__no-Favorites">No Favorites</div>
						)}
					</div>
				</div>
			</>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default CategoryDetails;
