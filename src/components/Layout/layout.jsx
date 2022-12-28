import { Header, Container, StyledLink } from './layout';
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
      <Container>
        <Header>
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="movies">Movies</StyledLink>
          </nav>
        </Header>
        <Outlet />
      </Container>
    );
  };