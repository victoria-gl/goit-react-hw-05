import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDJkZjVhMmYzZDE3OWU2YjU4NTNiMTg5NjM5NjQ1NiIsInN1YiI6IjY2NDVjN2UwNDI4ZWEwNzE4NDQwZmI0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aJLeAkOiBtTzk13wpepZNiAkkhjzRZkypLgFNKT4USk";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export const fetchTrend = async () => {
  try {
    const response = await axios.get(`trending/movie/day?language=uk-UA`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByID = async (id) => {
  try {
    const response = await axios.get(`movie/${id}?language=uk-UA`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchInfo = async (id, select) => {
  try {
    const response = await axios.get(`movie/${id}/${select}?language=en-US`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchByQuery = async (query) => {
  try {
    const response = await axios.get(
      `search/movie?query=${query}&language=uk-UA&include_adult=false&page=1`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
