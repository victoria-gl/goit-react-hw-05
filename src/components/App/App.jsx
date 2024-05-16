import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const ReactAlarm = lazy(() => import("../ReactAlarm/ReactAlarm"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFound = lazy(() => import("../../pages/NotFoundPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const Home = lazy(() => import("../../pages/HomePage"));
const Movies = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const NavBar = lazy(() => import("../Navigation/Navigation"));

export const App = () => {
  return (
    <>
      <NavBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ReactAlarm />
    </>
  );
};
