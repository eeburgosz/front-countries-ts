import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./presentation/redux-toolkit/store";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

root.render(
	<ThemeProvider theme={darkTheme}>
		<CssBaseline />
		<Provider store={store}>
			<BrowserRouter>
				{/* <React.StrictMode> */}
				<App />
				{/* </React.StrictMode> */}
			</BrowserRouter>
		</Provider>
	</ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
