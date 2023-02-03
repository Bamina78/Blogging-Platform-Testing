import userData from "../../fixtures/example.json";

describe("Growth-Mentor Web Test", () => {
  beforeEach(() => {
    cy.visit("https://www.growthmentor.com/");
  });

  const signInLink = "https://app.growthmentor.com/mentees/sign_in"

  it("Testing Sign Up", () => {
    cy.get(".sign-up").click();

    cy.get("#growthmentor-input-1").type(`${userData.firstName}`);
    cy.get("#growthmentor-input-2").type(`${userData.lastName}`);
    cy.get("#growthmentor-input-3").type(`${userData.email}`);
    cy.get("#growthmentor-input-4").type(`${userData.password}`);

    cy.get(".tw-cursor-pointer").click();
  });

  it("Testing Wrong Password", () => {
    cy.get(`[href="${signInLink}"]`).click();

    //Test login inputs
    cy.get("#growthmentor-input-1").type(`${userData.wrongEmail}`);
    cy.get("#growthmentor-input-2").type(`${userData.wrongPassword}`);

    //Test remember me checkbox
    cy.get("#growthmentor-checkbox-3").check();

    //Test sign in button
    cy.get(".tw-cursor-pointer").click();

    //Test if wrong password error message exist
    cy.get(".tw-font-semibold").contains("Invalid Email or password.");
  });

  it("Testing Forgot Password", () => {
    cy.get(`[href="${signInLink}"]`).click();

    cy.get(".tw-text-neutral-400").click();
    cy.get("#growthmentor-input-4").type(userData.email);

    cy.get(".tw-shadow-md").click();
    cy.get(".tw-ml-3 > .tw-font-medium").should("contain", "Success");
  });

  it("Testing Sign In", () => {
    cy.get(`[href="${signInLink}"]`).click();

    //Test login inputs
    cy.get("#growthmentor-input-1").type(`${userData.email}`);
    cy.get("#growthmentor-input-2").type(`${userData.password}`);

    //Test remember me checkbox
    cy.get("#growthmentor-checkbox-3").check();

    //Test sign in button
    cy.get(".tw-cursor-pointer").click();
  });

  
});
