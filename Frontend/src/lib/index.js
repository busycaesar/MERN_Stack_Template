import axios from "axios";

/**
 * All the functions for fetching APIs.
 * @module FetchingAPIs
 */

/**
 * Fetch GET '/' API from backend.
 * @memberof module:APIs
 * @returns The data received from the backend.
 */
export const getRoot = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/`);
  if (response.status == 200) return response.data;
  else throw new Error("Server Error!");
};
