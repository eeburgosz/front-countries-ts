import { countriesApi } from "../../config/api/countriesApi";
import { AppDispatch } from "./store";
import {
	setCountries,
	setCountryById,
	setCountryByName,
	startLoading,
} from "./countriesSlice";
import { CountryProps } from "../../infrastructure/interfaces";

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
