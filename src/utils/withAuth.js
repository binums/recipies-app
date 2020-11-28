import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

const withAuth = (Component) => {
	const HOC = (props) => {
		const [cookies, setCookie, removeCookie] = useCookies();
		const history = useHistory();

		useEffect(() => {
			if (cookies.auth_status === "true") {
				if (history?.location?.pathname === "/auth") {
					if (cookies.post_auth_redirect) {
						removeCookie("post_auth_redirect");
						history.push(cookies.post_auth_redirect);
					} else {
						history.push("/home");
					}
				} else history.push(history?.location?.pathname);
			} else {
				if (!(history?.location?.pathname === "/auth")) {
					setCookie("post_auth_redirect", history?.location?.pathname);
					history.push("/auth");
				}
			}
		}, [cookies, history]);

		return (
			<Component {...props} setCookie={setCookie} removeCookie={removeCookie} />
		);
	};

	return HOC;
};

export default withAuth;
