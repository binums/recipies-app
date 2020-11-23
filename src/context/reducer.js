const reducer = (state, action) => {
	switch (action.type) {
		case "SNACKBAR_TOGGLE":
			return {
				...state,
				snackBarMessage: action.payload.snackBarMessage,
				snackBarState: action.payload.snackBarState,
				snackBarStatus: action.payload.snackBarStatus,
			};

		default:
			return state;
	}
};

export default reducer;
