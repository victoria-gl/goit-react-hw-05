import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await api.get(`/movie/${movieId}/reviews`);
        setReviews(response.data.results);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              {review.author}: {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
