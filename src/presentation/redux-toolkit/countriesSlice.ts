import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CountryProps } from "../../infrastructure/interfaces";

interface DataState {
	isLoading: boolean;
	allCountries: CountryProps[];
	auxAllCountries: CountryProps[];
	countryById: CountryProps;
}

const noCountryById: CountryProps = {
	id: "",
	name: "",
	flag: "",
	continent: "",
	population: 0,
	maps: "",
	Activities: [],
};

const initialState: DataState = {
	isLoading: false,
	allCountries: [],
	auxAllCountries: [],
	countryById: noCountryById,
};

export const countriesSlice = createSlice({
	name: "countries",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		setCountries: (state, action: PayloadAction<CountryProps[]>) => {
			state.isLoading = false;
			state.allCountries = action.payload;
			state.auxAllCountries = action.payload;
		},
		setCountryByName: (state, action: PayloadAction<CountryProps[]>) => {
			state.isLoading = false;
			state.allCountries = action.payload;
		},
		setCountryById: (state, action: PayloadAction<CountryProps>) => {
			state.isLoading = false;
			state.countryById = action.payload;
		},
		setFilters: (state, action: PayloadAction<CountryProps[]>) => {
			state.isLoading = false;
			state.allCountries = action.payload;
		},
	},
});

export const {
	startLoading,
	setCountries,
	setCountryByName,
	setCountryById,
	setFilters,
} = countriesSlice.actions;
