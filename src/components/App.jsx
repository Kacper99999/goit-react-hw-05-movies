import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import('/src/pages/Movies'));
const MovieDetails = lazy(() => import('/src/components/MovieDetails'));
const Cast = lazy (() => import('/src/components/Cast'));
const Reviews = lazy (() => import('/src/components/Reviews'));
const SharedLayout = lazy (() => import("/src/components/SharedLayout"));
import "/src/components/Styles.scss";

function App() {
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;