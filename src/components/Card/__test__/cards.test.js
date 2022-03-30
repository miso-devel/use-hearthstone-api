import { render, screen, fireEvent } from "@testing-library/react";
import { Cards } from "../Cards";

//   const url: any = useLocation().search;
//   const query: any = new URLSearchParams(url);
// の部分がRouterの中でないとダメだよって出たのでRouterで囲ってみたがダメだった
// https://github.com/remix-run/react-router/issues/8518

describe("check", () => {
  it("debug", () => {
    const { debug } = render(<Cards />);
    debug();
  });

  it("検索フォームがあるか", () => {
    render(<Cards />);
    const searchElement = screen.getByText("検索フォーム");
    expect(searchElement).toBeInTheDocument();
  });
});
