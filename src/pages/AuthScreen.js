import { useState } from "react";
import logoDark from "../images/Flavr_logo-dark.png";
import AuthForm from "../components/AuthForm";
import withAuth from "../utils/withAuth";

const AuthScreen = ({ setCookie, removeCookie }) => {
	const [authState, setAuthState] = useState(0);
	const [signupFields, setSignupFields] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [signinFields, setSigninFields] = useState({
		email: "",
		password: "",
	});

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
							onClick={() => {
								setTimeout(() => {
									setAuthState(1);
								}, 200);
							}}>
							SignIn
						</button>
						<p className="auth__message">Don’t have an account?</p>
						<button
							className="button button__outlined"
							onClick={() => {
								setTimeout(() => {
									setAuthState(2);
								}, 200);
							}}>
							SignUp
						</button>
					</div>
				</>
			) : authState === 1 ? (
				<AuthForm
					setAuthState={setAuthState}
					formData={{
						action: "Log In",
						title: "LOG IN",
						subtitle: "Good to see you again",
						inputFields: [
							{
								type: "email",
								name: "email",
								placeholder: "Your Email",
							},
							{
								type: "password",
								name: "password",
								placeholder: "Password",
							},
						],
						button: "SignIn",
						buttonSubscript: "Forgot your password?",
					}}
					fieldState={signinFields}
					setFieldState={setSigninFields}
					setCookie={setCookie}
					removeCookie={removeCookie}
				/>
			) : (
				<AuthForm
					setAuthState={setAuthState}
					formData={{
						action: "Sign Up",
						title: "SIGN UP",
						subtitle: "Nice to meet you",
						inputFields: [
							{
								type: "text",
								name: "name",
								placeholder: "Your Name",
							},
							{
								type: "email",
								name: "email",
								placeholder: "Your Email",
							},
							{
								type: "password",
								name: "password",
								placeholder: "Password",
							},
						],
						button: "SignUp",
					}}
					fieldState={signupFields}
					setFieldState={setSignupFields}
					setCookie={setCookie}
					removeCookie={removeCookie}
				/>
			)}
		</div>
	);
};

export default withAuth(AuthScreen);
