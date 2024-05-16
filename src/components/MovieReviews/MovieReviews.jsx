import { useParams } from "react-router-dom";
import css from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { fetchInfo } from "../Api/fetchMovieApi";
import { ReviewItem } from "../MovieReviewsItem/MovieReviewsItem";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

const MovieReviews = () => {
  const { id } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    setLoader(true);
    setError(false);
    setReviews([]);
    const getReviews = async () => {
      try {
        const response = await fetchInfo(id, "reviews");
        setReviews(response.results);
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
        {reviews.length > 0 &&
          reviews.map((item) => {
            return (
              <li key={item.id}>
                <ReviewItem data={item} />
              </li>
            );
          })}
      </ul>
      {reviews.length === 0 && !error && <p>No reviews</p>}
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </>
  );
};
export default MovieReviews;
