import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("Test copyright", () => {
  render(<Footer />);
  const copyrightElement = screen.getByText(/Copyright . 2022-2023/i);
  expect(copyrightElement).toBeInTheDocument();
});

test("test author", () => {
  render(<Footer />);
  const authorElement = screen.getByText(/^By Alain Guillon$/i);
  expect(authorElement).toBeInTheDocument();
});
