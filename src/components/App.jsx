import { Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import styled from "@emotion/styled";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const App = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="movies">Movies</StyledLink>
        
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element = {<Movies />} />
        
      </Routes>
    </div>
  );
};


