import { useContext, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import { useHistory } from "react-router-dom";
import GlobalContext from "../context/GlobalContext";
import { getRecipeById, handleFav } from "../Data/recipeList";
import ic_difficulty from "../images/card-icons/ic_difficulty.svg";
import ic_duration from "../images/card-icons/ic_duration.svg";
import ic_recipes_grey2 from "../images/card-icons/ic_recipes_grey2.svg";

const RecipeDetails = ({ match, location }) => {
	const [recipe, setRecipe] = useState();
	const [isFav, setIsFav] = useState(false);
	const history = useHistory();
	const { dispatch } = useContext(GlobalContext);

	useEffect(() => {
		if (history) {
			let temp = getRecipeById(match.params.id);
			setRecipe({ ...temp[0] });
			setIsFav(temp[0].isFav);
		}
	}, [history]);

	useEffect(() => {
		if (match.params.id) {
			let temp = getRecipeById(match.params.id);
			setRecipe({ ...temp[0] });
		}
	}, [isFav, match.params.id]);

	if (recipe) {
		return (
			<div className="recipe-details__container">
				<div className="recipe-details__header">
					<div
						className="recipe-details__header-top"
						style={{
							background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url(${recipe.image}) no-repeat center/cover`,
						}}>
						<div className="recipe-details__go-back">
							<IconContext.Provider value={{ size: "1.5rem", color: "white" }}>
								<div className="recipe-details__go-back--active">
									<BiArrowBack
										onClick={() => {
											let local = [];
											if (location?.state?.from.length) {
												local = location?.state?.from.splice(
													location?.state?.from.length - 1,
													1
												);
											}
											setTimeout(() => {
												if (local.length) {
													history.push({
														pathname: local[0],
														state: {
															from: [...history.location.state.from],
														},
													});
												} else {
													history.push("/home");
												}
											}, 150);
										}}
									/>
								</div>
							</IconContext.Provider>
						</div>
						<div className="recipe-details__fav">
							{isFav ? (
								<IconContext.Provider
									value={{ size: "1.5rem", color: "white" }}>
									<div className="recipe-details__fav--active">
										<FaHeart
											onClick={() => {
												dispatch({
													type: "SNACKBAR_TOGGLE",
													payload: {
														snackBarMessage: "Removed from favorites",
														snackBarState: "info",
														snackBarStatus: true,
													},
												});
												setTimeout(() => {
													handleFav(match.params.id);
													setIsFav(false);
												}, 150);
											}}
										/>
									</div>
								</IconContext.Provider>
							) : (
								<IconContext.Provider
									value={{ size: "1.5rem", color: "white" }}>
									<div className="recipe-details__fav--active">
										<FiHeart
											onClick={() => {
												dispatch({
													type: "SNACKBAR_TOGGLE",
													payload: {
														snackBarMessage: "Added to favorites",
														snackBarState: "info",
														snackBarStatus: true,
													},
												});
												setTimeout(() => {
													handleFav(match.params.id);
													setIsFav(true);
												}, 150);
											}}
										/>
									</div>
								</IconContext.Provider>
							)}
						</div>
					</div>
					<div className="recipe-details__header--bottom">
						<div className="recipe-details__details">
							<p className="recipe-details__category">{recipe.category}</p>
							<p className="recipe-details__name">{recipe.name}</p>
						</div>
						<div className="recipe-details__bottom-bar">
							<div className="recipe-details__duration">
								<img src={ic_duration} alt="ic_duration" />
								<p className="recipe-details__bottom-bar--text">
									{recipe.duration}
								</p>
								<p className="recipe-details__bottom-bar--text">minutes</p>
							</div>
							<div className="recipe-details__difficulty">
								<img src={ic_difficulty} alt="ic_difficulty" />
								<p className="recipe-details__bottom-bar--text">
									{recipe.difficulty}
								</p>
							</div>
							<div className="recipe-details__people">
								<img src={ic_recipes_grey2} alt="ic_recipes_grey2" />
								<p className="recipe-details__bottom-bar--text">
									{recipe.people}
								</p>
								<p className="recipe-details__bottom-bar--text">People</p>
							</div>
						</div>
					</div>
				</div>
				<div className="recipe-details__content">
					<ul className="recipe-details__ingredients">
						{recipe.ingredients.map((ingredient, i) => {
							return (
								<li key={i} className="recipe-details__ingredient">
									<div className="recipe-details__ingredient--bullet"></div>
									<div className="recipe-details__ingredient--text">
										{ingredient}
									</div>
								</li>
							);
						})}
					</ul>
					<ul className="recipe-details__instructions">
						{recipe.instructions.map((instruction, i) => {
							return (
								<li key={i} className="recipe-details__instruction">
									<div className="recipe-details__instruction--bullet">
										{i + 1}
									</div>
									<div className="recipe-details__instruction--text">
										{instruction}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
};

export default RecipeDetails;
