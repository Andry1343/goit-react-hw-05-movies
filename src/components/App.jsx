import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { Layout } from './Layout/layout.jsx';
import { NotFound } from './pages/NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
