import React, { useEffect, useRef } from "react";
import { IconContext } from "react-icons/lib";
import { HiBadgeCheck } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { MdWarning } from "react-icons/md";

const SnackBar = ({ state, message, exitState }) => {
	const snackRef = useRef(null);

	useEffect(() => {
		snackRef.current.classList.add("snackbar__open");
		setTimeout(() => {
			if (snackRef && snackRef.current && snackRef.current.classList) {
				snackRef.current.classList.remove("snackbar__open");
				exitState(false);
			}
		}, 3000);
	}, [snackRef]);

	const handleClose = () => {
		setTimeout(() => {
			snackRef.current.classList.remove("snackbar__open");
			exitState(false);
		}, 250);
	};

	return (
		<div className={`snackbar snackbar--${state}`} ref={snackRef}>
			{state === "success" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: "#c0ca33" }}>
						<HiBadgeCheck />
					</IconContext.Provider>
				</div>
			)}
			{state === "info" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: "#00b0ff" }}>
						<IoMdInformationCircle />
					</IconContext.Provider>
				</div>
			)}
			{state === "error" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: " #f44336" }}>
						<RiCloseCircleFill />
					</IconContext.Provider>
				</div>
			)}
			{state === "warning" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: " #ffa12f" }}>
						<MdWarning />
					</IconContext.Provider>
				</div>
			)}
			<p>{message}</p>
			<div className="snackbar__close" onClick={() => handleClose()}>
				<IconContext.Provider value={{ size: "1.5rem", color: " #5a5a5a" }}>
					<VscChromeClose />
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default SnackBar;
