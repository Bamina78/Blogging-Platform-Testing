describe("Testing Quora Platform", () => {
  beforeEach(() => {
    cy.visit("https://www.quora.com/");
  });

  it("Testing Quora", () => {
    cy.get('#email').type("banda.amina2@gmail.com");
    cy.get('#password').type("Cypresstesting1!");
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe')

    .then(cy.wrap)
    .find('#recaptcha-anchor')
    .should('be.visible')
    .click();

  });
});
