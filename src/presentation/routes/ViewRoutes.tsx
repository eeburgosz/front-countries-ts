import React from "react";
import { Route, Routes } from "react-router-dom";
import {
	AboutScreen,
	CreateScreen,
	DetailsScreen,
	HomeScreen,
} from "../screens";
import { RoutesEnum } from "./routes";
import { Footer, Navbar } from "../components";

export const ViewRoutes: React.FC = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path={RoutesEnum.HOME} element={<HomeScreen />} />
				<Route path={RoutesEnum.CREATE} element={<CreateScreen />} />
				<Route path={RoutesEnum.ABOUT} element={<AboutScreen />} />
				<Route path={RoutesEnum.COUNTRYID} element={<DetailsScreen />} />
				<Route path={RoutesEnum.VIEW_ROUTES} element={<HomeScreen />} />
			</Routes>
			<Footer />
		</>
	);
};
