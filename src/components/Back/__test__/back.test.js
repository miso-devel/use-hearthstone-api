import { render, screen, fireEvent } from "@testing-library/react";
import { Back } from "../Back";

// debug()をtest外に出すとrenderが2回されたことになってscreen.getByText("CARD BACK")をしたときにテストが失敗する

describe("initial check", () => {
  it("デバッグ", () => {
    const { debug } = render(<Back />);
    debug();
  });
  it("Backコンポーネントがレンダーされているか", () => {
    render(<Back />);
    const linkElement = screen.getByText("CARD BACK");
    expect(linkElement).toBeInTheDocument();
  });

  it("initial img", () => {
    render(<Back />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", "back1.png");
  });
  it("initial name", () => {
    render(<Back />);
    const nameElement = screen.getByText("ピザストーン");
    expect(nameElement).toBeInTheDocument();
  });
  it("initial text", () => {
    render(<Back />);
    const textElement = screen.getByText(
      "デッキをチーズたっぷりで仕上げたい時に。 2019年2月、ランク戦プレイで5勝することにより獲得。"
    );
    expect(textElement).toBeInTheDocument();
  });
});
