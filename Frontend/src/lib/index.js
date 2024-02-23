import axios from "axios";

/**
 * This directory contains all the functions for fetching the data from backend using API.
 */
export const getRoot = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BACKEND_DOMAIN}/`);
  if (response.status == 200) return response.data;
  else throw new Error("Server Error!");
};
