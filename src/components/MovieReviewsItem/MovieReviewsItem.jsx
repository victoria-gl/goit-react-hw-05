import css from "./MovieReviewsItem.module.css";
export const ReviewItem = ({ data: { content, author } }) => {
  return (
    <>
      <div>
        <h3 className={css.title}>{author}</h3>
        <p>{content}</p>
      </div>
    </>
  );
};
