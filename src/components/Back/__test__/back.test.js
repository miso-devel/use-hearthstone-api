import { render, screen, fireEvent } from "@testing-library/react";
import { Back } from "../Back";

test("Backコンポーネントがレンダーされているか", () => {
  render(<Back />);
  const linkElement = screen.getByText("CARD BACK");
  expect(linkElement).toBeInTheDocument();
});
