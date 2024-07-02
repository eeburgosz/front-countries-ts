import { useEffect } from "react";
import {
	useAppDispatch,
	useAppSelector,
} from "./presentation/redux-toolkit/hooks";
import { getAllCountries } from "./presentation/redux-toolkit/thunks";
import { AppRoutes } from "./presentation/routes/AppRoutes";

function App() {
	const dispatch = useAppDispatch();
	const countries = useAppSelector((state) => state.allCountries);
	const isLoading = useAppSelector((state) => state.isLoading);

	useEffect(() => {
		if (!countries.length && !isLoading) {
			dispatch(getAllCountries());
		}
	}, [dispatch, countries, isLoading]);

	return (
		<>
			<AppRoutes />
		</>
	);
}

export default App;
