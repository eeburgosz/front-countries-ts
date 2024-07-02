import { countriesApi } from "../../config/api/countriesApi";
import { AppDispatch, RootState } from "./store";
import {
	setCountries,
	setCountryById,
	setCountryByName,
	setFilters,
	startLoading,
} from "./countriesSlice";
import { CountryProps } from "../../infrastructure/interfaces";
import { Helpers } from "../../config/helpers";

export const getAllCountries = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await countriesApi.get<CountryProps[]>("/countries");
			dispatch(setCountries(data));
		} catch (error) {
			console.log(error);
			dispatch(setCountries([]));
		}
	};
};

export const getCountryByName = (name: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await countriesApi.get<CountryProps[]>(
				`/countries?name=${name}`
			);
			dispatch(setCountryByName(data));
		} catch (error) {
			console.log(error);
			dispatch(setCountryByName([]));
		}
	};
};

export const getCountryById = (id: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(startLoading());
		try {
			const { data } = await countriesApi.get<CountryProps>(`/countries/${id}`);
			dispatch(setCountryById(data));
		} catch (error) {
			console.log(error);
			throw new Error("Error de ejecución - getCountryById");
		}
	};
};

export const postActivity = (/* idArray: string[] */) => {
	return async (dispatch: AppDispatch) => {
		dispatch(startLoading());
		// try {
		// 	const { data } = await countriesApi.post<CountryProps>(`/activity`);
		// 	dispatch(setCountryById(data));
		// } catch (error) {
		// 	console.log(error);
		// 	throw new Error("Error de ejecución - getCountryById");
		// }
	};
};

export const getFiltering = (
	alphabetic: string,
	population: string,
	season: string[],
	continent: string[]
) => {
	return async (dispatch: AppDispatch, getState: () => RootState) => {
		dispatch(startLoading());
		try {
			const countries = getState().auxAllCountries;
			const data = Helpers.filter(
				alphabetic,
				population,
				season,
				continent,
				countries
			);
			dispatch(setFilters(data));
		} catch (error) {
			throw new Error("Error de ejecución - getFiltering");
		}
	};
};
