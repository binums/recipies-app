import React from "react";
import SnackBar from "../components/SnackBar";

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
			<SnackBar state={"success"} message={"This is success message"} />
			<br />
			<SnackBar state={"info"} message={"This is info message"} />
			<br />
			{/* <SnackBar state={"error"} message={"This is error message"} />
			<br />
			<SnackBar state={"warning"} message={"This is success message"} />
			<br /> */}
		</div>
	);
};

export default Home;
