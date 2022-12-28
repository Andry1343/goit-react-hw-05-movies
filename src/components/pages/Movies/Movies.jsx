import { Form, Button } from './Movies.styled';

export const Movies = () => {
  return (
    <Form>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Enter movie to search..."
        name="input"
      />
      <Button type="submit">
        <p>Search</p>
      </Button>
    </Form>
  );
};
