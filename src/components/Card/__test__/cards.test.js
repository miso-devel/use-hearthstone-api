import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Cards } from "../Cards";

//   const url: any = useLocation().search;
//   const query: any = new URLSearchParams(url);
// の部分がRouterの中でないとダメだよって出たのでRouterで囲ってみたがダメだった
describe("check", () => {
  it("cardsデバッグ", () => {
    const { debug } = render(
      <Router>
        <Routes>
          <Route element={<Cards />} />
        </Routes>
      </Router>
    );
    debug();
  });
  it("cards", () => {
    const { debug } = render(<Cards />);
    debug();
  });
});
