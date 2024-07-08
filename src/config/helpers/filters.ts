import { CountryProps } from "../../infrastructure/interfaces";

export class Helpers {
	static filter(
		alphabetic: string,
		population: string,
		season: string[],
		continent: string[],
		countries: CountryProps[]
	) {
		let filteredCountries = [...countries];
		const lowerCaseSeasons = season.map((s) => s.toLowerCase());

		if (continent.length > 0) {
			filteredCountries = filteredCountries.filter((country) =>
				continent.includes(country.continent)
			);
		}
		if (season.length > 0) {
			filteredCountries = filteredCountries.filter((country) =>
				country.Activities.some((activity) =>
					lowerCaseSeasons.includes(activity.season.toLowerCase())
				)
			);
		}

		if (alphabetic) {
			if (alphabetic === "A-Z") {
				filteredCountries.sort((a, b) => a.name.localeCompare(b.name));
			} else if (alphabetic === "Z-A") {
				filteredCountries.sort((a, b) => b.name.localeCompare(a.name));
			}
		}

		if (population) {
			if (population === "More") {
				filteredCountries.sort((a, b) => b.population - a.population);
			} else if (population === "Less") {
				filteredCountries.sort((a, b) => a.population - b.population);
			}
		}
		return filteredCountries;
	}
}
