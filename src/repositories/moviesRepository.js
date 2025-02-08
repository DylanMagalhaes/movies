import axios from "axios";

export function moviesRepository() {
  const API_KEY = "6e15a08f";
  const URL_API = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  const getMoviesByTitle = async (title) => {
    try {
      const result = await axios.get(`${URL_API}&s=${title}`);

      const movies = result.data;

      return movies.Search;
    } catch (error) {
      console.error(error);
    }
  };

  return { getMoviesByTitle };
}
