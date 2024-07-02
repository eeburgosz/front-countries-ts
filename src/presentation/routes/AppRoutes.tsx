import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingScreen } from "../screens";
import { ViewRoutes } from "./ViewRoutes";
import { RoutesEnum } from "./routes";

export const AppRoutes: React.FC = () => {
	return (
		<div>
			<Routes>
				<Route path={RoutesEnum.LANDING} element={<LandingScreen />} />
				<Route path={RoutesEnum.VIEW_ROUTES} element={<ViewRoutes />} />
				<Route />
			</Routes>
		</div>
	);
};
