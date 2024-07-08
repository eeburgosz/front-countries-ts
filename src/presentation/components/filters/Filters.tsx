import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	InputLabel,
	ListItemText,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import {
	ContinentProps,
	SeasonsProps,
} from "../../../infrastructure/interfaces";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../redux-toolkit/hooks";
import { getFiltering } from "../../redux-toolkit/thunks";

interface FilterParamsProps {
	alphabetic: string;
	population: string;
	seasonName: string[];
	continentName: string[];
}

const initialState: FilterParamsProps = {
	alphabetic: "",
	population: "",
	seasonName: [],
	continentName: [],
};

export const Filters: React.FC = () => {
	const continents = [
		ContinentProps.Africa,
		ContinentProps.Europe,
		ContinentProps.Oceania,
		ContinentProps.Americas,
		ContinentProps.Antarctic,
		ContinentProps.Asia,
	];

	const seasons = [
		SeasonsProps.Autumn,
		SeasonsProps.Spring,
		SeasonsProps.Summer,
		SeasonsProps.Winter,
	];

	const dispatch = useAppDispatch();

	const [filterParams, setFilterParams] =
		useState<FilterParamsProps>(initialState);

	const handleChange = (event: SelectChangeEvent<string | string[]>) => {
		const { value, name } = event.target;

		setFilterParams((prevParams) => {
			const newParams = { ...prevParams, [name]: value };

			if (name === "population") {
				newParams.alphabetic = "";
			} else if (name === "alphabetic") {
				newParams.population = "";
			}

			return newParams;
		});
	};

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setFilterParams(initialState);
	};

	useEffect(() => {
		const { alphabetic, population, seasonName, continentName } = filterParams;
		dispatch(getFiltering(alphabetic, population, seasonName, continentName));
	}, [dispatch, filterParams]);

	return (
		<Container disableGutters>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				gap="5rem"
				sx={{
					"@media (max-width:768px)": {
						gap: "1rem",
					},
				}}
			>
				<Box
					width="100vw"
					component="section"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-around"
				>
					<Typography
						variant="h3"
						sx={{
							"@media (max-width:768px)": {
								fontSize: "2rem",
							},
						}}
					>
						Sort
					</Typography>
					<Box
						display="flex"
						width="50%"
						justifyContent="space-between"
						gap="5rem"
						mt={2}
						sx={{
							"@media (max-width:768px)": {
								paddingLeft: "1rem",
								paddingRight: "1rem",
								width: "100%",
								justifyContent: "center",
							},
						}}
					>
						<FormControl fullWidth>
							<InputLabel id="Alphabetic">Alphabetic</InputLabel>
							<Select
								labelId="Alphabetic"
								name="alphabetic"
								value={filterParams.alphabetic}
								label="Alphabetic"
								onChange={handleChange}
							>
								<MenuItem value="A-Z">A-Z</MenuItem>
								<MenuItem value="Z-A">Z-A</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth>
							<InputLabel id="Population">Population</InputLabel>
							<Select
								labelId="Population"
								name="population"
								value={filterParams.population}
								label="Population"
								onChange={handleChange}
							>
								<MenuItem value="More">More population</MenuItem>
								<MenuItem value="Less">Less population</MenuItem>
							</Select>
						</FormControl>
					</Box>
				</Box>
				<Box
					width="100vw"
					component="section"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-around"
				>
					<Typography
						variant="h3"
						sx={{
							"@media (max-width:768px)": {
								fontSize: "2rem",
							},
						}}
					>
						Filters
					</Typography>
					<Box
						display="flex"
						width="50%"
						justifyContent="space-between"
						gap="5rem"
						mt={2}
						sx={{
							"@media (max-width:768px)": {
								paddingLeft: "1rem",
								paddingRight: "1rem",
								width: "100%",
								justifyContent: "center",
							},
						}}
					>
						{/* Activity by season */}
						<FormControl sx={{ m: 1, width: 300 }}>
							<InputLabel id="ActivityBySeason">Activity by season</InputLabel>
							<Select
								labelId="ActivityBySeason"
								id="activity-by-season"
								name="seasonName"
								multiple
								value={filterParams.seasonName}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(", ")}
							>
								{seasons.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox
											checked={filterParams.seasonName.indexOf(name) > -1}
										/>
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>

						{/* Continent */}
						<FormControl sx={{ m: 1, width: 300 }}>
							<InputLabel id="Continents">Continent</InputLabel>
							<Select
								labelId="Continents"
								id="continent-select"
								name="continentName"
								multiple
								value={filterParams.continentName}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(", ")}
							>
								{continents.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox
											checked={filterParams.continentName.indexOf(name) > -1}
										/>
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
				</Box>
			</Box>
			<Box
				width={"100%"}
				display={"flex"}
				justifyContent={"center"}
				mb={10}
				mt={5}
			>
				<Button
					variant="outlined"
					color="error"
					onClick={(e) => handleClick(e)}
				>
					Reset filters
				</Button>
			</Box>
		</Container>
	);
};
