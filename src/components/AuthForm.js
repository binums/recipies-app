import { BiArrowBack } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

const AuthForm = ({ setAuthState, formData }) => {
	return (
		<>
			<IconContext.Provider value={{ size: "1.5rem" }}>
				<div className="goback">
					<BiArrowBack onClick={() => setAuthState(0)} />
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
								/>
							);
						})}
					</div>
					<button className="button button__filled">{formData.button}</button>
					{formData.buttonSubscript && (
						<p className="auth_message">{formData.buttonSubscript}</p>
					)}
				</div>
			</div>
		</>
	);
};

export default AuthForm;
