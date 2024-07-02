import React from "react";
import "./home.css";
import { Box, Container } from "@mui/material";
import { Carousel, Filters } from "../../components";

export const HomeScreen: React.FC = () => {
	return (
		<Container disableGutters sx={{ maxWidth: "100vw !important", m: 0 }}>
			{/* Carousel */}
			<Box
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
				className="image-container"
				alignItems="center"
				justifyContent="center"
				display="flex"
				height="30rem"
				style={{
					backgroundColor: "black",
				}}
			>
				<Filters />
			</Box>
			{/* Sección 3 */}
			<Box
				className="image-container"
				style={{
					backgroundImage: `url(${require("../../../assets/fondo1.jpg")})`,
				}}
			>
				{/* Cards Container */}
			</Box>
		</Container>
	);
};

// <Container disableGutters sx={{ maxWidth: "100vw !important", m: 0 }}>
// 		<Box
// 			className="image-container"
// 			alignItems={"center"}
// 			justifyContent={"center"}
// 			display={"flex"}
// 			style={{
// 				backgroundImage: `url(${require("../../../assets/fondo2.jpg")})`,
// 			}}
// 		>
// 			<Card
// 				sx={{
// 					display: "flex",
// 					borderRadius: "30px",
// 					backgroundColor: "WindowText",
// 					cursor: "pointer",
// 				}}
// 			>
// 				<Box sx={{ display: "flex", flexDirection: "column" }}>
// 					<CardContent sx={{ flex: "1 0 auto" }}>
// 						<Typography variant="h1">See all countries</Typography>
// 					</CardContent>
// 					<Box
// 						sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
// 					></Box>
// 				</Box>
// 			</Card>
// 		</Box>
// 		<Box
// 			className="image-container"
// 			alignItems={"center"}
// 			justifyContent={"center"}
// 			display={"flex"}
// 			gap={5}
// 			style={{
// 				backgroundColor: "black",
// 			}}
// 		>
// 			<Card sx={{ display: "flex", borderRadius: "30px" }}>
// 				<Box sx={{ display: "flex", flexDirection: "column" }}>
// 					<CardContent sx={{ flex: "1 0 auto" }}>
// 						<Typography variant="h3">Sort by population</Typography>
// 					</CardContent>
// 					<Box
// 						sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
// 					></Box>
// 				</Box>
// 			</Card>
// 			<Card sx={{ display: "flex", borderRadius: "30px" }}>
// 				<Box sx={{ display: "flex", flexDirection: "column" }}>
// 					<CardContent sx={{ flex: "1 0 auto" }}>
// 						<Typography variant="h3">Sort by alphabet</Typography>
// 					</CardContent>
// 					<Box
// 						sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
// 					></Box>
// 				</Box>
// 			</Card>
// 		</Box>
// 		<Box
// 			className="image-container"
// 			style={{
// 				backgroundImage: `url(${require("../../../assets/fondo1.jpg")})`,
// 			}}
// 		></Box>
// 		<Carousel />
// 	</Container>
