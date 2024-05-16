import axios from "axios";

axios.defaults.headers.common["Authorization"] =
  "Bearer 002df5a2f3d179e6b5853b1896396456";

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
