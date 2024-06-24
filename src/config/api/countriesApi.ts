import axios from "axios";

const { STAGE, API_LOCAL, API_PROD } = process.env;

export const API_URL = STAGE === "prod" ? API_PROD : API_LOCAL;

export const countriesApi = axios.create({
	baseURL: `${API_URL}`,
	headers: { "Content-Type": "application/json" },
});
