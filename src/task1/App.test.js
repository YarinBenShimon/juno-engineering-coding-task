import { render, screen } from '@testing-library/react';
import App from "./App";

test("Testing works!", () => {
  render(<App />);
  expect(screen.getByTestId('App')).toBeInTheDocument();
  /*const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(getByText(/Your code/i)).toBeInTheDocument();*/
});

