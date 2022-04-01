describe("header component", () => {
  it("Linkがあるか", () => {
    cy.visit("http://localhost:3000");
    cy.get(".to_card");
    cy.get(".to_back");
  });
  it("cardページに飛ぶか", () => {
    cy.visit("http://localhost:3000");
    cy.get(".to_card").click();
    cy.url().should("include", "/cards");
  });
  it("backページに飛ぶか", () => {
    cy.visit("http://localhost:3000");
    cy.get(".to_back").click();
    cy.url().should("include", "/back");
  });
  it("デバッグ", () => {
    cy.visit("http://localhost:3000");
    cy.debug();
  });
});
