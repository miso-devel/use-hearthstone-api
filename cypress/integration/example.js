// debug()をtest外に出すとrenderが2回されたことになってscreen.getByText("CARD BACK")をしたときにテストが失敗する
import { render, screen, fireEvent } from "@testing-library/react";
describe("initial check", () => {
  it("デバッグ", () => {
    cy.visit("http://localhost:3000/back");
  });
  it("Backコンポーネントがレンダーされているか", () => {
    cy.visit("http://localhost:3000/back");
    const linkElement = screen.getByText("CARD BACK");
    expect(linkElement).toBeInTheDocument();
  });
});
