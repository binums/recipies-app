import pancakes from "../images/recipes/pancakes.svg";
import pasta_salad from "../images/recipes/pasta_salad.svg";
import sour_cream_meat_tacos from "../images/recipes/sour_cream_meat_tacos.svg";
import alfredo_sauce from "../images/recipes/alfredo_sauce.svg";
import chocolate_pudding from "../images/recipes/chocolate_pudding.svg";
import minestrone_soup from "../images/recipes/minestrone_soup.svg";
import banana_muffin from "../images/recipes/banana_muffin.svg";
import waffles from "../images/recipes/waffles.svg";

let list = [
	{
		image: pasta_salad,
		category: "Healthy",
		name: "Pasta Salad 1",
		duration: 30,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: pancakes,
		category: "Breakfast & Brunch",
		name: "Pancakes 1",
		duration: 15,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: sour_cream_meat_tacos,
		category: "Main Dish",
		name: "Sour Cream Meat Tacos 1",
		duration: 45,
		difficulty: "Moderate",
		people: 8,
		isFav: false,
	},
	{
		image: sour_cream_meat_tacos,
		category: "Main Dish",
		name: "Sour Cream Meat Tacos 2",
		duration: 45,
		difficulty: "Moderate",
		people: 8,
		isFav: false,
	},
	{
		image: pancakes,
		category: "Breakfast & Brunch",
		name: "Pancakes 2",
		duration: 15,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: pasta_salad,
		category: "Healthy",
		name: "Pasta Salad 2",
		duration: 30,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: pasta_salad,
		category: "Healthy",
		name: "Pasta Salad 3",
		duration: 30,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: sour_cream_meat_tacos,
		category: "Main Dish",
		name: "Sour Cream Meat Tacos 3",
		duration: 45,
		difficulty: "Moderate",
		people: 8,
		isFav: false,
	},
	{
		image: pancakes,
		category: "Breakfast & Brunch",
		name: "Pancakes 3",
		duration: 15,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: alfredo_sauce,
		category: "Pasta",
		name: "Alfredo Sauce 1",
		duration: 25,
		difficulty: "Easy",
		people: 4,
		isFav: true,
	},
	{
		image: minestrone_soup,
		category: "Soup",
		name: "Minestorne Soup 1",
		duration: 45,
		difficulty: "Easy",
		people: 8,
		isFav: true,
	},
	{
		image: chocolate_pudding,
		category: "Dessert",
		name: "Chocolate Pudding 1",
		duration: 10,
		difficulty: "Easy",
		people: 4,
		isFav: true,
	},
	{
		image: alfredo_sauce,
		category: "Pasta",
		name: "Alfredo Sauce 2",
		duration: 25,
		difficulty: "Easy",
		people: 4,
		isFav: true,
	},
	{
		image: minestrone_soup,
		category: "Soup",
		name: "Minestorne Soup 2",
		duration: 45,
		difficulty: "Easy",
		people: 8,
		isFav: true,
	},
	{
		image: chocolate_pudding,
		category: "Dessert",
		name: "Chocolate Pudding 2",
		duration: 10,
		difficulty: "Easy",
		people: 4,
		isFav: true,
	},
	{
		image: alfredo_sauce,
		category: "Pasta",
		name: "Alfredo Sauce 3",
		duration: 25,
		difficulty: "Easy",
		people: 4,
		isFav: false,
	},
	{
		image: minestrone_soup,
		category: "Soup",
		name: "Minestorne Soup 3",
		duration: 45,
		difficulty: "Easy",
		people: 8,
		isFav: false,
	},
	{
		image: chocolate_pudding,
		category: "Dessert",
		name: "Chocolate Pudding 3",
		duration: 10,
		difficulty: "Easy",
		people: 4,
		isFav: false,
	},
	{
		image: banana_muffin,
		category: "Breakfast & Brunch",
		name: "Banana Muffin 1",
		duration: 60,
		difficulty: "Moderate",
		people: 8,
		isFav: false,
	},
	{
		image: pancakes,
		category: "Breakfast & Brunch",
		name: "Pancakes 4",
		duration: 15,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: waffles,
		category: "Breakfast & Brunch",
		name: "Waffles 1",
		duration: 25,
		difficulty: "Easy",
		people: 5,
		isFav: false,
	},
	{
		image: banana_muffin,
		category: "Breakfast & Brunch",
		name: "Banana Muffin 2",
		duration: 60,
		difficulty: "Moderate",
		people: 8,
		isFav: false,
	},
	{
		image: pancakes,
		category: "Breakfast & Brunch",
		name: "Pancakes 5",
		duration: 15,
		difficulty: "Easy",
		people: 6,
		isFav: false,
	},
	{
		image: waffles,
		category: "Breakfast & Brunch",
		name: "Waffles 2",
		duration: 25,
		difficulty: "Easy",
		people: 5,
		isFav: false,
	},
];

let recipeList = list.sort(() => 0.5 - Math.random());

export default recipeList;
