import { useContext, useEffect, useRef } from "react";
import { IconContext } from "react-icons/lib";
import { HiBadgeCheck } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdInformationCircle } from "react-icons/io";
import { MdWarning } from "react-icons/md";
import GlobalContext from "../context/GlobalContext";

const SnackBar = () => {
	const snackRef = useRef(null);
	const { state, dispatch } = useContext(GlobalContext);

	useEffect(() => {
		snackRef.current.classList.add("snackbar__open");
		setTimeout(() => {
			if (snackRef && snackRef.current && snackRef.current.classList) {
				snackRef.current.classList.remove("snackbar__open");
				dispatch({
					type: "SNACKBAR_TOGGLE",
					payload: {
						snackBarMessage: "",
						snackBarState: "",
						snackBarStatus: false,
					},
				});
			}
		}, 3000);
	}, [snackRef]);

	const handleClose = () => {
		setTimeout(() => {
			snackRef.current.classList.remove("snackbar__open");
			dispatch({
				type: "SNACKBAR_TOGGLE",
				payload: {
					snackBarMessage: "",
					snackBarState: "",
					snackBarStatus: false,
				},
			});
		}, 250);
	};

	return (
		<div className={`snackbar snackbar--${state.snackBarState}`} ref={snackRef}>
			{state.snackBarState === "success" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: "#c0ca33" }}>
						<HiBadgeCheck />
					</IconContext.Provider>
				</div>
			)}
			{state.snackBarState === "info" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: "#00b0ff" }}>
						<IoMdInformationCircle />
					</IconContext.Provider>
				</div>
			)}
			{state.snackBarState === "error" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: " #f44336" }}>
						<RiCloseCircleFill />
					</IconContext.Provider>
				</div>
			)}
			{state.snackBarState === "warning" && (
				<div className="snackbar__icon">
					<IconContext.Provider value={{ size: "40px", color: " #ffa12f" }}>
						<MdWarning />
					</IconContext.Provider>
				</div>
			)}
			<p>{state.snackBarMessage}</p>
			<div className="snackbar__close" onClick={() => handleClose()}>
				<IconContext.Provider value={{ size: "1.5rem", color: " #5a5a5a" }}>
					<VscChromeClose />
				</IconContext.Provider>
			</div>
		</div>
	);
};

export default SnackBar;
