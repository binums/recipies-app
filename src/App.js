import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import SplashScreen from "./pages/SplashScreen";
import main from "./styles/main.scss";

function App() {
	return (
		<div className="app__container">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={SplashScreen} />
					<Route path="/auth" exact component={AuthScreen} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
