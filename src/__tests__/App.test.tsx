import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../Components/App";

test("demo", () => {
  expect(true).toBe(true);
});

test("Renders the main page", () => {
  const { findByText } = render(<App />);
  const text = findByText(/source/i);
  expect(text).toHaveTextContent;
});
