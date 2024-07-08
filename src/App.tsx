import { useEffect } from "react";
import { useAppDispatch } from "./presentation/redux-toolkit/hooks";
import { getAllCountries } from "./presentation/redux-toolkit/thunks";
import { AppRoutes } from "./presentation/routes/AppRoutes";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getAllCountries());
	}, [dispatch]);

	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
