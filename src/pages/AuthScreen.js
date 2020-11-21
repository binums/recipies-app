import { useState } from "react";
import logoDark from "../images/Flavr_logo-dark.png";
import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import AuthForm from "../components/AuthForm";

const AuthScreen = () => {
	const [authState, setAuthState] = useState(0);

	return (
		<div className="auth__container">
			{authState === 0 ? (
				<>
					<div className="auth__image-container">
						<img src={logoDark} alt="logo" />
					</div>
					<div className="auth__actions">
						<button
							className="button button__filled"
							onClick={() => setAuthState(1)}>
							SignIn
						</button>
						<p className="auth__message">Don’t have an account?</p>
						<button
							className="button button__outlined"
							onClick={() => setAuthState(2)}>
							SignUp
						</button>
					</div>
				</>
			) : authState === 1 ? (
				<AuthForm
					setAuthState={setAuthState}
					formData={{
						title: "LOG IN",
						subtitle: "Good to see you again",
						inputFields: [
							{
								type: "email",
								placeholder: "Your Email",
							},
							{
								type: "password",
								placeholder: "Password",
							},
						],
						button: "SignIn",
						buttonSubscript: "Forgot your password?",
					}}
				/>
			) : (
				<AuthForm
					setAuthState={setAuthState}
					formData={{
						title: "SIGN UP",
						subtitle: "Nice to meet you",
						inputFields: [
							{
								type: "text",
								placeholder: "Your Name",
							},
							{
								type: "email",
								placeholder: "Your Email",
							},
							{
								type: "password",
								placeholder: "Password",
							},
						],
						button: "SignUp",
					}}
				/>
			)}
		</div>
	);
};

export default AuthScreen;
