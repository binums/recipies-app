import { useEffect, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { IconContext } from "react-icons/lib";

const Search = ({ showSearch, setShowSearch }) => {
	const searchContainerRef = useRef(null);

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
	}, [showSearch]);
  console.log("TCL ~ file: Search.js ~ line 23 ~ Search ~ showSearch", showSearch)

	return (
		<div className="search__container" ref={searchContainerRef}>
			<div className="search__top-nav">
				<IconContext.Provider
					value={{ size: "1.5rem" }}
					className="search__close--container">
					<div className="search__close">
						<div className="search__close--active">
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
			<div className="search__content"></div>
		</div>
	);
};

export default Search;
