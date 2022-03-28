import { render, screen } from "@testing-library/react";
import App from "./App";

test("ヘッダーがrenderされてるか", () => {
  render(<App />);
  const linkElement = screen.getByText("HEARTH STONE CARD SEARCHER");
  expect(linkElement).toBeInTheDocument();
});
