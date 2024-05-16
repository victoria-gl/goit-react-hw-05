import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import { IoSearch } from "react-icons/io5";

export const SearchBar = ({ handleSubmit }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    if (!query) {
      toast.error("Please enter your search query");
      return;
    }
    handleSubmit(query);
    e.target.reset();
  };
  return (
    <>
      <form className={css.form} onSubmit={onSubmit}>
        <div className={css.divForm}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
            name="query"
          />
          <button type="submit" className={css.btn}>
            <IoSearch className={css.icon} />
          </button>
        </div>
      </form>
    </>
  );
};
