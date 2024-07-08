import { Box, Container, Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../../redux-toolkit/hooks";
import { Card } from "../";

export const CountriesContainer: React.FC = () => {
	const countries = useAppSelector((state) => state.allCountries);
	const loading = useAppSelector((state) => state.isLoading);
	const itemsPerPage = 18;
	const [page, setPage] = useState(1);

	const handleChangePage = (
		event: React.ChangeEvent<unknown>,
		newPage: number
	) => {
		setPage(newPage);
	};

	const startIndex = (page - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const countriesPerPage = countries.slice(startIndex, endIndex);

	return (
		<>
			{loading ? (
				<Typography variant="h4" display={"flex"} justifyContent={"center"}>
					Loading
				</Typography>
			) : countries.length === 0 ? (
				<Typography variant="h4" display={"flex"} justifyContent={"center"}>
					No countries found
				</Typography>
			) : (
				<Container disableGutters sx={{ mt: 5 }}>
					<Box
						gap={3}
						display="grid"
						gridTemplateColumns="repeat(3,1fr)"
						sx={{
							"@media (max-width:768px)": {
								display: "flex",
								flexDirection: "column",
							},
						}}
					>
						{countriesPerPage.map((country) => (
							<Card
								key={country.id}
								id={country.id}
								continent={country.continent}
								flag={country.flag}
								name={country.name}
							/>
						))}
					</Box>
					<Box mt={10} width="100%" justifyContent="center" display="flex">
						<Box
							mt={2}
							display="flex"
							justifyContent="center"
							width="40%"
							sx={{
								background: "black",
								"@media (max-width:768px)": {
									width: "100%",
								},
							}}
						>
							<Pagination
								count={Math.ceil(countries.length / itemsPerPage)}
								page={page}
								onChange={handleChangePage}
								color="primary"
								variant="outlined"
							/>
						</Box>
					</Box>
				</Container>
			)}
		</>
	);
};
