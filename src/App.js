import { Route, BrowserRouter, Switch } from "react-router-dom";
import AuthScreen from "./pages/AuthScreen";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import main from "./styles/main.scss";

function App() {
	
	return (
		<div className="app__container">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={SplashScreen} />
					<Route path="/auth" exact component={AuthScreen} />
					<Route path="/home" exact component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
