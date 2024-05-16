import { useEffect, useState, Suspense, lazy } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import api from "../api";

const MovieCast = lazy(() => import("../components/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews"));

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { path, url } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await api.get(`/movie/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Link to="/movies">Go back</Link>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <p>{movie.overview}</p>
      <ul>
        <li>
          <Link to={`${url}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Route path={`${path}/cast`} component={MovieCast} />
        <Route path={`${path}/reviews`} component={MovieReviews} />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
