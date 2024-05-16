import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import { fetchByID } from "../components/api";
import { Loader } from "../components/Loader/Loader";
import { FaArrowLeft } from "react-icons/fa";
import { MovieDetailsTitle } from "../components/MovieDetailsTitle/MovieDetailsTitle";
import css from "../pages/MovieDetailsPage.module.css";
import clsx from "clsx";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [dataById, setDataByID] = useState({});
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backInLocation = location.state?.from ?? "/";
  const styleMovieDetails = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  useEffect(() => {
    if (!id) return;
    setError(false);
    const fetchDataById = async () => {
      try {
        setLoader(true);
        const data = await fetchByID(id);
        setDataByID(data);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    fetchDataById();
  }, [id]);
  return (
    <main>
      <Link to={backInLocation} className={css.linkArrow}>
        <FaArrowLeft className={css.icon} /> Назад
      </Link>
      {dataById && <MovieDetailsTitle data={dataById} />}
      <div className={css.linkDiv}>
        <NavLink
          to={"cast"}
          className={styleMovieDetails}
          state={{ from: location.state?.from }}
        >
          Актори
        </NavLink>
        <NavLink
          to={"reviews"}
          className={styleMovieDetails}
          state={{ from: location.state?.from }}
        >
          Відгуки
        </NavLink>
      </div>
      <Outlet />
      {loader && <Loader />}
      {error && <ErrorMessage />}
    </main>
  );
};

export default MovieDetailsPage;
