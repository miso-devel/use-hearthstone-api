import { render, screen } from "@testing-library/react";
import App from "./App";

// jest
test("ヘッダーがrenderされてるか", () => {
  render(<App />);
  const linkElement = screen.getByText("HEARTH STONE CARD SEARCHER");
  expect(linkElement).toBeInTheDocument();
});
