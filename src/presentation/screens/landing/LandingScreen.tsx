import { Button, Container, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import "./landing.css";
import "animate.css";

export const LandingScreen: React.FC = () => {
	return (
		<Container
			sx={{ maxWidth: "100% !important", backgroundColor: "black" }}
			disableGutters
		>
			<Container className="landing-container">
				<Typography
					className="animate__animated animate__fadeIn"
					sx={{
						mt: { xs: 35, md: 25 },
						fontWeight: 600,
						variant: "h2",
						color: "white",
						fontFamily: "Playfair Display SC",
						fontSize: { xs: "1.5rem", md: "2.5rem" },
					}}
				>
					Travel Around The World
				</Typography>
				<Typography
					className="animate__animated animate__fadeIn"
					sx={{
						animationDelay: "0.25s",
						mt: { xs: 0, md: 5 },
						marginLeft: { xs: 0, md: 100 },
						left: 0,
						fontWeight: 600,
						color: "white",
						fontFamily: "Playfair Display SC",
						textAlign: { xs: "center", md: "left" },
					}}
				>
					By Ernesto Burgos
				</Typography>
				<Link to={"/home"}>
					<Button
						className="animate__animated animate__fadeIn"
						variant="outlined"
						size="large"
						sx={{
							fontFamily: "Playfair Display SC",
							color: "white",
							border: "1px solid rgba(207, 208, 209, 0.5)",
							animationDelay: "0.5s !important",
							mt: { xs: 15, md: 5 },
							display: "block",
						}}
					>
						Enter
					</Button>
				</Link>
			</Container>
		</Container>
	);
};
