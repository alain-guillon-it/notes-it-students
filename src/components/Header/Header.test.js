import { render, screen } from "@testing-library/react";
import Header from "./Header";

test("un nom", () => {
  render(<Header />);
  const linkElement = screen.getByText(/Yo la famille/i);
  expect(linkElement).toBeInTheDocument();
});
