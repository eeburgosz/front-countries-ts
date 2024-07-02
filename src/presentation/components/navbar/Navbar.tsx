import { Box, AppBar, Typography, Input } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
					// border: "1px solid red",
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
				<Input placeholder="Search a country" />
			</AppBar>
		</Box>
	);
};
