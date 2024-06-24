export interface Country {
	id: string;
	name: string;
	flag: string;
	continent: Continent;
	population: number;
	maps: string;
	Activities: Activity[];
}

export interface Activity {
	id: number;
	activityName: string;
	difficulty: number;
	duration: number;
	season: string;
	CountryActivity: CountryActivity;
}

export interface CountryActivity {
	CountryId: string;
	ActivityId: number;
}

export enum Continent {
	Africa = "Africa",
	Americas = "Americas",
	Antarctic = "Antarctic",
	Asia = "Asia",
	Europe = "Europe",
	Oceania = "Oceania",
}
