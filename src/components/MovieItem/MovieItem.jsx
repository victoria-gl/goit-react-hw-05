import css from "./MovieItem.module.css";

export const MovieItem = ({ data: { poster_path, title } }) => {
  const photoURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div>
      <img
        src={`${photoURL}${poster_path}`}
        alt={title}
        width={320}
        height={480}
        className={css.image}
      />
    </div>
  );
};
