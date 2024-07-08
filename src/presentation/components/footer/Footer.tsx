import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const Footer = () => {
	return (
		<Container
			disableGutters
			sx={{
				maxWidth: "100% !important",
			}}
		>
			<Box
				component="div"
				display="flex"
				height="30rem"
				sx={{
					backgroundColor: "black",
					"@media(max-width:768px": {
						flexDirection: "column",
					},
				}}
				border={"1px solid red"}
			>
				<Box
					display="flex"
					flexDirection="column"
					border={"1px solid blue"}
					width={"50%"}
					alignItems={"center"}
					justifyContent={"center"}
				>
					<Typography variant="h4" display={"flex"}>
						Ernesto Burgos
					</Typography>
					<Typography variant="h6" display={"flex"}>
						React | Redux | Node | Express | PostgreSQL | Sequelize | Typescript
					</Typography>
				</Box>
				<Box
					alignItems={"center"}
					justifyContent={"space-around"}
					display={"flex"}
					width={"50%"}
				>
					<a
						style={{
							textDecoration: "none",
							color: "white",
							cursor: "pointer",
						}}
						target="_blank"
						href="https://www.github.com/eeburgosz"
						rel="noreferrer"
					>
						Github
					</a>
					<a
						style={{
							textDecoration: "none",
							color: "white",
							cursor: "pointer",
						}}
						target="_blank"
						href="https://www.github.com/eeburgosz"
						rel="noreferrer"
					>
						Portfolio
					</a>
					<a
						style={{
							textDecoration: "none",
							color: "white",
							cursor: "pointer",
						}}
						target="_blank"
						href="https://www.github.com/eeburgosz"
						rel="noreferrer"
					>
						LinkedIn
					</a>
				</Box>
			</Box>
		</Container>
	);
};
