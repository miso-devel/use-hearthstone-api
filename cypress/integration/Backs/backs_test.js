describe("back component", () => {
  it("デバッグ", () => {
    cy.visit("http://localhost:3000/back");
    cy.debug();
  });
  it("Backコンポーネントがレンダーされているか", () => {
    cy.visit("http://localhost:3000/back");
  });
  it("mockdataが入っているかどうか", () => {
    cy.visit("http://localhost:3000/back");
    cy.get("p").contains("ピザストーン");
    cy.get("p").contains(
      "デッキをチーズたっぷりで仕上げたい時に。 2019年2月、ランク戦プレイで5勝することにより獲得。"
    );
  });
  it("画像表示ができているか", () => {
    cy.get("img").should("be.visible");
  });
});
