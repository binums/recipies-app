import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SnackBar from "../components/SnackBar";
import withAuth from "../utils/withAuth";

const Profile = ({ setCookie }) => {
	const [triggerSnack, setTriggererSnack] = useState(false);

	return (
		<div className="dashboard__container">
			<div className="profile__container">
				<p>Hey there,</p>
				<button
					className="button button__filled"
					onClick={() => {
						setTriggererSnack(true);
						setTimeout(() => {
							setCookie("auth_status", "false");
						}, 3000);
					}}>
					Sign Out
				</button>
			</div>
			{triggerSnack && (
				<SnackBar
					state="success"
					message="Sign Out successfull"
					exitState={setTriggererSnack}
				/>
			)}
			<NavBar selected="profile" className="nav-bar" />
		</div>
	);
};

export default withAuth(Profile);
