import axios from "axios";

const API_PROD = "https://backcountries-d6li.onrender.com";

export const countriesApi = axios.create({
	baseURL: API_PROD,
	headers: { "Content-Type": "application/json" },
});
