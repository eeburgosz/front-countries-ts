export interface CountryProps {
	id: string;
	name: string;
	flag: string;
	// continent: ContinentProps;
	continent: string;
	population: number;
	maps: string;
	Activities: ActivityProps[];
}

export interface ActivityProps {
	id: number;
	activityName: string;
	difficulty: number;
	duration: number;
	season: string;
	CountryActivity: CountryActivityProps;
}

export interface CountryActivityProps {
	CountryId: string;
	ActivityId: number;
}

export enum ContinentProps {
	Africa = "Africa",
	Americas = "Americas",
	Antarctic = "Antarctic",
	Asia = "Asia",
	Europe = "Europe",
	Oceania = "Oceania",
}

export enum SeasonsProps {
	Summer = "Summer",
	Winter = "Winter",
	Spring = "Spring",
	Autumn = "Autumn",
}
