import {
	Box,
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
import { useState } from "react";

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

	const [continentName, setContinentName] = useState<string[]>([]);
	const [seasonName, setSeasonName] = useState<string[]>([]);
	const [population, setPopulation] = useState<string>("");
	const [alphabetic, setAlphabetic] = useState<string>("");

	const handleChange = (event: SelectChangeEvent<string | string[]>) => {
		const { value, name } = event.target;

		if (name === "continentName")
			setContinentName(typeof value === "string" ? value.split(",") : value);
		else if (name === "seasonName")
			setSeasonName(typeof value === "string" ? value.split(",") : value);
		else if (name === "population") setPopulation(value as string);
		else if (name === "alphabetic") setAlphabetic(value as string);
	};

	console.log(continentName);
	console.log(seasonName);
	console.log(population);
	console.log(alphabetic);

	return (
		<Container disableGutters>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				gap="5rem"
			>
				<Box
					width="100vw"
					component="section"
					display="flex"
					flexDirection="column"
					alignItems="center"
					justifyContent="space-around"
				>
					<Typography variant="h2">Arrange</Typography>
					<Box
						display="flex"
						width="50%"
						justifyContent="space-between"
						gap="5rem"
						mt={5}
					>
						<FormControl fullWidth>
							<InputLabel id="Alphabetic">Alphabetic</InputLabel>
							<Select
								labelId="Alphabetic"
								name="alphabetic"
								value={alphabetic}
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
								value={population}
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
					<Typography variant="h2">Sort</Typography>
					<Box display="flex" width="50%" justifyContent="space-between">
						{/* Activity by season */}
						<FormControl sx={{ m: 1, width: 300 }}>
							<InputLabel id="ActivityBySeason">Activity by season</InputLabel>
							<Select
								labelId="ActivityBySeason"
								id="activity-by-season"
								name="seasonName"
								multiple
								value={seasonName}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(", ")}
							>
								{seasons.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={seasonName.indexOf(name) > -1} />
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
								value={continentName}
								onChange={handleChange}
								input={<OutlinedInput label="Tag" />}
								renderValue={(selected) => selected.join(", ")}
							>
								{continents.map((name) => (
									<MenuItem key={name} value={name}>
										<Checkbox checked={continentName.indexOf(name) > -1} />
										<ListItemText primary={name} />
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</Box>
				</Box>
			</Box>
		</Container>
	);
};
