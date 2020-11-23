import { createContext } from "react";

const GlobalContext = createContext({
	snackBarMessage: "",
	snackBarState: "",
	snackBarStatus: false,
});

export default GlobalContext;
