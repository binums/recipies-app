import breakfast_andd_brunch from "../images/category/breakfast_and_brunch.svg";

let categoryList = [
	{ _id: 1, name: "Healthy", image: breakfast_andd_brunch },
	{ _id: 2, name: "Main Dish", image: breakfast_andd_brunch },
	{ _id: 3, name: "Pasta", image: breakfast_andd_brunch },
	{ _id: 4, name: "Soup", image: breakfast_andd_brunch },
	{ _id: 5, name: "Dessert", image: breakfast_andd_brunch },
	{ _id: 6, name: "Breakfast & Brunch", image: breakfast_andd_brunch },
	{ _id: 7, name: "Pasta 2", image: breakfast_andd_brunch },
	{ _id: 8, name: "Soup 2", image: breakfast_andd_brunch },
	{ _id: 9, name: "Dessert 2", image: breakfast_andd_brunch },
	{ _id: 10, name: "Breakfast & Brunch 2", image: breakfast_andd_brunch },
];

const getCategoryById = (id) => {
	return categoryList.filter((val) => val._id == id);
};

export default categoryList;
export { getCategoryById };
