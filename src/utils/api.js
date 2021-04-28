import axios from "axios";
import { OMDB_API_KEY } from "./constants";

export const searchMovie = (query) => {
  return axios.get(
    `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&type=movie&s=${query}`
  );
};
