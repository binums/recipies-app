import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import GlobalContext from "../context/GlobalContext";
import withAuth from "../utils/withAuth";

const Profile = ({ setCookie }) => {
	const { dispatch } = useContext(GlobalContext);

	return (
		<div className="dashboard__container">
			<div className="profile__container">
				<p>Hey there,</p>
				<button
					className="button button__filled"
					onClick={() => {
						dispatch({
							type: "SNACKBAR_TOGGLE",
							payload: {
								snackBarMessage: "Sign Out successfull",
								snackBarState: "success",
								snackBarStatus: true,
							},
						});
						setTimeout(() => {
							setCookie("auth_status", "false");
						}, 200);
					}}>
					Sign Out
				</button>
			</div>
			<NavBar selected="profile" className="nav-bar" />
		</div>
	);
};

export default withAuth(Profile);
