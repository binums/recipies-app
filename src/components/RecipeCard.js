import ic_difficulty from "../images/card-icons/ic_difficulty.svg";
import ic_duration from "../images/card-icons/ic_duration.svg";
import ic_recipes_grey2 from "../images/card-icons/ic_recipes_grey2.svg";

const RecipeCard = ({ recipeList }) => {
	return (
		<div className="recipe-car__container">
			{recipeList.map((recipe, i) => {
				return (
					<div className="recipe-card" key={i}>
						<img src={recipe.image} alt={recipe.name} />
						<div className="details">
							<p className="category">{recipe.category}</p>
							<p className="name">{recipe.name}</p>
						</div>
						<div className="bottom-bar">
							<div className="duration">
								<img src={ic_duration} alt="ic_duration" />
								<p className="bottom-bar--text">{recipe.duration}</p>
								<p className="bottom-bar--text">minutes</p>
							</div>
							<div className="difficulty">
								<img src={ic_difficulty} alt="ic_difficulty" />
								<p className="bottom-bar--text">{recipe.difficulty}</p>
							</div>
							<div className="people">
								<img src={ic_recipes_grey2} alt="ic_recipes_grey2" />
								<p className="bottom-bar--text">{recipe.people}</p>
								<p className="bottom-bar--text">People</p>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default RecipeCard;
