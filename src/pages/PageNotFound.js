import { useHistory } from "react-router-dom";

const PageNotFound = () => {
	const history = useHistory();

	return (
		<div className="page-not-found__container">
			<p>Page Not Found</p>
			<div className="button__container">
				<button
					className="button button__filled"
					onClick={() => {
						setTimeout(() => {
							history.push("/home");
						}, 200);
					}}>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default PageNotFound;
