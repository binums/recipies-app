import { Route, BrowserRouter, Switch } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Recipes from "./pages/Recipes";
import SplashScreen from "./pages/SplashScreen";
import main from "./styles/main.scss";
import GlobalContext from "./context/GlobalContext";
import reducer from "./context/reducer";
import { useContext, useReducer } from "react";
import SnackBar from "./components/SnackBar";
import PageNotFound from "./pages/PageNotFound";

function App() {
	const initialSnackBarState = useContext(GlobalContext);
	const [state, dispatch] = useReducer(reducer, initialSnackBarState);

	return (
		<div className="app__container">
			<GlobalContext.Provider value={{ state, dispatch }}>
				{state.snackBarStatus && <SnackBar />}
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={SplashScreen} />
						<Route exact path="/auth" component={AuthScreen} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/recipes" component={Recipes} />
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/profile" component={Profile} />
						<Route component={PageNotFound} />
					</Switch>
				</BrowserRouter>
			</GlobalContext.Provider>
		</div>
	);
}

export default App;
