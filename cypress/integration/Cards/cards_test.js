describe("cards component", () => {
  it("デバッグ", () => {
    cy.visit("http://localhost:3000/cards?mockdata=1");
    cy.debug();
  });
  it("Cardsコンポーネントがレンダーされているか", () => {
    cy.visit("http://localhost:3000/cards?mockdata=1");
  });
  it("mockdataが入っているかどうか", () => {
    cy.visit("http://localhost:3000/cards?mockdata=1");
    cy.get("p").contains("データ１");
  });
  it("画像表示ができているか", () => {
    cy.visit("http://localhost:3000/cards?mockdata=1");
    cy.get("img").should("be.visible");
  });
});
