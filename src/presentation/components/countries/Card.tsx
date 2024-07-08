import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface CardProps {
	id: string;
	name: string;
	flag: string;
	continent: string;
}

export const Card: React.FC<CardProps> = ({ id, name, flag, continent }) => {
	return (
		<Link to={`/country/${id}`} className="links">
			<Box
				p={1}
				component="div"
				height={"10rem"}
				display="flex"
				alignItems={"center"}
				justifyContent={"center"}
				sx={{
					backgroundColor: "rgba(0, 0, 0, 0.5)",
					borderRadius: "20px",
				}}
			>
				<Box
					component="img"
					width={"10rem"}
					src={flag}
					alt={`Bandera de ${name}`}
				/>
				<Box
					height={"100%"}
					width="100%"
					component="section"
					display="flex"
					flexDirection="column"
					justifyContent="space-evenly"
					textAlign="right"
				>
					<Typography variant="h6">{name}</Typography>
					<Typography>{continent}</Typography>
				</Box>
			</Box>
		</Link>
	);
};
{
	/* <Link
			style={{
				margin: 0,
				backgroundColor: "blue",
				gap: "1rem",
				display: "flex",
				border: "1px solid red",
				justifyContent: "center",
				alignItems: "center",
			}}
			to={`/country/${id}`}
			className="links"
		>
			<Box
				display="flex"
				flexDirection="row"
				mt={10}
				width="20rem"
				height="100%"
				alignItems={"center"}
				justifyContent={"center"}
				sx={{
					backgroundColor: "white",
				}}
			>
				<Box
					component="img"
					width={"10rem"}
					// height={"auto"}
					src={flag}
					alt={`Bandera de ${name}`}
					// sx={{ objectFit: "cover" }}
				/>

				<Box
					mr={1}
					width="100%"
					component="section"
					display="flex"
					flexDirection="column"
					justifyContent="space-evenly"
					textAlign="right"
				>
					<Typography variant="h6">{name}</Typography>
					<Typography>{continent}</Typography>
				</Box>
			</Box>
		</Link> */
}
