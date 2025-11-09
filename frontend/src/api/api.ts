import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL as string;

export const comoVotouApi = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});