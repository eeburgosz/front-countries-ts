import { Box, AppBar, Typography, Input } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const handleSubmit: React.FormEventHandler<HTMLDivElement> = () => {
		console.log("submit");
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
			}}
		>
			<AppBar
				position="absolute"
				sx={{
					background: "transparent",
					boxShadow: 0,
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "center",
					height: "3rem",
				}}
			>
				<Link to={"/home"} className="links">
					<Typography sx={{ fontWeight: 100 }}>Home</Typography>
				</Link>
				<Link to={"/about"} className="links">
					<Typography sx={{ fontWeight: 100 }}>About</Typography>
				</Link>
				<Link to={"/create"} className="links">
					<Typography sx={{ fontWeight: 100 }}>Create</Typography>
				</Link>
				<Input onSubmit={handleSubmit} placeholder="Search a country" />
			</AppBar>
		</Box>
	);
};
