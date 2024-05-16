import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { fetchTrend } from "../api";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movie, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getTrendDay = async () => {
      setError(false);
      try {
        setLoader(true);
        const data = await fetchTrend();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getTrendDay();
  }, []);
  return (
    <main>
      {movie.length > 0 && <MovieList dataMovie={movie} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
};

export default HomePage;
