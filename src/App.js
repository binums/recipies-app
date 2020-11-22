import { Route, BrowserRouter, Switch, useHistory } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import SplashScreen from "./pages/SplashScreen";
import main from "./styles/main.scss";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function App() {
	return (
		<div className="app__container">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={SplashScreen} />
					<Route path="/auth" exact component={AuthScreen} />
					<Route path="/home" exact component={Home} />
					<Route path="/recipes" exact component={Recipes} />
					<Route path="/favorites" exact component={Favorites} />
					<Route path="/profile" exact component={Profile} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
