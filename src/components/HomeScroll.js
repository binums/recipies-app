const HomeScroll = ({ scrollList }) => {
	return (
		<div className="home-scroll__container">
			{scrollList.map((val, i) => {
				return (
					<div className="home-scroll__item">
						<img src={val.image} alt={val.name} />
					</div>
				);
			})}
		</div>
	);
};

export default HomeScroll;
