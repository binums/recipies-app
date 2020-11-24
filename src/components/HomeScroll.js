const HomeScroll = ({ scrollList }) => {
	return (
		<div className="home__side-scroll--container">
			{scrollList.map((val, i) => {
				return (
					<div className="home__side-scroll--item">
						<img src={val.image} alt={val.name} />
					</div>
				);
			})}
		</div>
	);
};

export default HomeScroll;
