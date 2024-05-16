import css from "./MovieCastItem.module.css";

export const MovieCastItem = ({ data }) => {
  const photoURL = "https://image.tmdb.org/t/p/original/";
  const profilePath = `${photoURL}${data.profile_path}`;
  return (
    <div className={css.div}>
      <img src={profilePath} alt={data.name} width={260} className={css.img} />
      <p>
        Актор(ка): <span className={css.actor}>{data.name}</span>
      </p>
      <p>
        В ролі: <span className={css.actor}>{data.character}</span>
      </p>
    </div>
  );
};
