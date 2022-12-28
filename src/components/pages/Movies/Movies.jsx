import { Form, Button } from "./Movies.styled";


export const Movies = () => {
    return (
        <div>
            <Form >
        <input type="text" autoComplete="off" autoFocus placeholder="Enter movie to search..." name="input"/>
        <Button type="submit"><p>Search</p></Button>
        </Form>
        {/* <MovieList movies={movies} /> */}
        </div>
        
    );
  };