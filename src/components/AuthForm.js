import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import GlobalContext from "../context/GlobalContext";

const AuthForm = ({
	setAuthState,
	formData,
	fieldState,
	setFieldState,
	setCookie,
}) => {

	const { dispatch } = useContext(GlobalContext);

	const handleSubmit = () => {
		let isValid = false,
			snackMessage = "",
			triggerState = "";
		if (
			((formData.button === "SignUp" && fieldState.name) ||
				formData.button === "SignIn") &&
			fieldState.email &&
			fieldState.password
		) {
			if (
				!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
					fieldState.email
				)
			) {
				snackMessage = `Invalid email`;
				triggerState = "error";
			} else {
				snackMessage = `${formData.action} was sucessfull`;
				triggerState = "success";
				isValid = true;
			}
		} else {
			snackMessage = `All fields are required`;
			triggerState = "error";
		}
		setTimeout(() => {
			if (formData.button === "SignUp" && isValid === true) setAuthState(1);
			if (formData.button === "SignIn" && isValid === true)
				setCookie("auth_status", "true");
		}, 200);
		dispatch({
			type: "SNACKBAR_TOGGLE",
			payload: {
				snackBarMessage: snackMessage,
				snackBarState: triggerState,
				snackBarStatus: true,
			},
		});

		console.log("AuthForm -> fieldState", fieldState);
	};

	return (
		<>
			<IconContext.Provider value={{ size: "1.5rem" }}>
				<div className="goback">
					<div className="goback__active">
						<BiArrowBack
							onClick={() => {
								setTimeout(() => {
									setAuthState(0);
								}, 150);
							}}
						/>
					</div>
				</div>
			</IconContext.Provider>
			<div className="actions">
				<div className="actions--top">
					<p className="auth__title">{formData.title}</p>
					<p className="auth__message">{formData.subtitle}</p>
				</div>
				<div className="actions--bottom">
					<div className="input-fields__container">
						{formData.inputFields.map((val, i) => {
							return (
								<input
									key={i}
									className="input-text"
									type={val.type}
									placeholder={val.placeholder}
									value={fieldState[val.name]}
									onChange={(e) =>
										setFieldState({ ...fieldState, [val.name]: e.target.value })
									}
								/>
							);
						})}
					</div>
					<button
						className="button button__filled"
						onClick={() => handleSubmit()}>
						{formData.button}
					</button>
					{formData.buttonSubscript && (
						<p className="auth_message">{formData.buttonSubscript}</p>
					)}
				</div>
			</div>
		</>
	);
};

export default AuthForm;
