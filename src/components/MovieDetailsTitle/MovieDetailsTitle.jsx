import css from "./MovieDetailsTitle.module.css";
export const MovieDetailsTitle = ({
  data: { title, backdrop_path, release_date, overview, genres },
}) => {
  const photoURL = "https://image.tmdb.org/t/p/original/";
  const genresList = genres && genres.map((genre) => genre.name).join(", ");
  return (
    <div className={css.details}>
      <img src={`${photoURL}${backdrop_path}`} alt="" className={css.image} />
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <ul className={css.list}>
          <li>
            <h3>Опис</h3> <p>{overview || "Ще немає опису"}</p>
          </li>
          <li>
            <h3>Жанр: </h3> <p>{genresList}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
