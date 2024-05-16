import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await api.get(`/movie/${movieId}/credits`);
        setCast(response.data.cast);
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id}>
            {member.name} as {member.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
