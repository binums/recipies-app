import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons/lib";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import categoryList from "../Data/categoryList";
import withAuth from "../utils/withAuth";

const Categories = () => {
	const [showSearch, setShowSearch] = useState(false);

	return (
		<>
			<Search
				showSearch={showSearch}
				setShowSearch={setShowSearch}
				type="recipes"
			/>
			<div className="dashboard__container">
				<div className="categories__container">
					<div className="categories__top-nav">
						<div></div>
						<p className="dashboard__title">CATEGORIES</p>
						<IconContext.Provider value={{ size: "1.5rem" }}>
							<div className="categories__search">
								<div className="categories__search--active">
									<FiSearch
										onClick={() => {
											setTimeout(() => {
												setShowSearch(true);
											}, 150);
										}}
									/>
								</div>
							</div>
						</IconContext.Provider>
					</div>
					<div className="categories__content">
						{categoryList.map((val, i) => {
							return (
								<div className="category" key={i}>
									{val}
								</div>
							);
						})}
					</div>
				</div>
				<NavBar selected="categories" className="nav-bar" />
			</div>
		</>
	);
};

export default withAuth(Categories);
