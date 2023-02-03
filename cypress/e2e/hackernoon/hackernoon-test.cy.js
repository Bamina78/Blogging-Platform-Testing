import userData from "../../fixtures/example.json";

describe("testing hackernoon platform", () => {
  beforeEach(() => {
    cy.visit("https://hackernoon.com/");
  });

  const wrongPasswordMessage =
    "The password is invalid or the user does not have a password.";
  const resetPasswordSuccessMessage =
    "To reset your password, click the link in the email we just sent you.";
  const blogTitle = "Blog Title";
  const blogParagraph = "My first blogpost on Hackernoon";

  it("Tests Hackernoon Reset Password", () => {
    cy.get(".sc-9328fc78-1 > div > .sc-d22d78c4-0").click();
    cy.get("#email").type(userData.email);
    cy.get("footer > .sc-d22d78c4-1").click();
    cy.get("h3").should("contain", resetPasswordSuccessMessage);
  });

  it("Tests Hackernoon Login", () => {
    cy.wait(4000);
    cy.get(".sc-9328fc78-1 > div > .sc-d22d78c4-0").click();

    cy.get("#email").type(userData.hackernoonEmail);
    cy.get("#password").type(userData.hackernoonPassword);

    cy.get("footer > .dnnLsR").click();
  });

  it("Tests Hackernoon Wrong Password Validation", () => {
    cy.get(".sc-9328fc78-1 > div > .sc-d22d78c4-0").click();

    cy.get("#email").type(userData.email);
    cy.get("#password").type(userData.password);
    cy.get("footer > .dnnLsR").click();

    cy.get(".sc-c2589523-0").should("contain", wrongPasswordMessage);
  });

  it("Tests Hackernoon search", () => {
    cy.get(".ais-SearchBox-input").type("React");
    cy.get(".search-results > :nth-child(2)").click();
    cy.scrollTo(0, 2000);
  });

  it("Tests Hackernoon start writing", () => {
    cy.get(".sc-9328fc78-1 > .sc-d22d78c4-0").click();
    cy.get(".header-links > .sc-iBYQkv > .sc-ipEyDJ > :nth-child(2)").click();
    cy.get(".editor-two").click();
    
    cy.wait(4000);
    
    cy.get(".draft-title").type(blogTitle);
    cy.get(".paragraph").type(blogParagraph);
  });
});
