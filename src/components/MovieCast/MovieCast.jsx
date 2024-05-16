import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchInfo } from "../Api/fetchMovieApi";
import { Loader } from "../Loader/Loader";
import css from "./MovieCast.module.css";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { MovieCastItem } from "../MovieCastItem/MovieCastItem";

const MovieCast = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);
  useEffect(() => {
    setLoader(true);
    setError(false);
    setCast([]);
    const getReviews = async () => {
      try {
        const response = await fetchInfo(id, "credits");
        setCast(response.cast);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getReviews();
  }, [id]);

  return (
    <>
      <ul className={css.list}>
        {cast.length > 0 &&
          cast.map((item) => {
            return (
              <li key={item.id}>
                <MovieCastItem data={item} />
              </li>
            );
          })}
      </ul>
      {cast.length === 0 && !error && <p>No information</p>}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};
export default MovieCast;
