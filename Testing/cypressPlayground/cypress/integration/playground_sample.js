describe("First Test", function () {
  it("Visits Cypress sample site.", function () {
    cy.visit("http://example.cypress.io");

    // cy.pause()
    
  });

  it("Finds and element", function () {
    cy.contains("type").click();
  });

  it("Determines correct URL", function () {
    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("cheese@email.com")
      .should("have.value", "cheese@email.com");

      cy.root().should("match", "html")
  });
});
