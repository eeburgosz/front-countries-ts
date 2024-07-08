import React from "react";
import "./home.css";
import { Box, Container } from "@mui/material";
import { Carousel, CountriesContainer, Filters } from "../../components";

export const HomeScreen: React.FC = () => {
	return (
		<Container disableGutters sx={{ maxWidth: "100vw !important", m: 0 }}>
			{/* Carousel */}
			<Box
				component="section"
				className="image-container"
				alignItems="center"
				justifyContent="center"
				display="flex"
				style={{
					backgroundImage: `url(${require("../../../assets/fondo2.jpg")})`,
				}}
			>
				<Carousel />
			</Box>
			{/* Sección 2 */}
			<Box
				component="section"
				className="image-container"
				alignItems="center"
				justifyContent="center"
				display="flex"
				height="30rem"
				sx={{
					backgroundColor: "black",
					"@media (max-width:768px)": {
						height: "fit-content",
					},
				}}
			>
				<Filters />
			</Box>
			{/* Sección 3 */}
			<Box
				component="section"
				height={"fit-content"}
				pt={10}
				pb={50}
				className="image-container"
				style={{
					backgroundImage: `url(${require("../../../assets/fondo1.jpg")})`,
				}}
			>
				{/* Cards Container */}
				<CountriesContainer />
			</Box>
		</Container>
	);
};
