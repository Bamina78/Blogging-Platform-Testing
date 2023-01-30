import userData from "../../fixtures/example.json";

describe("Growth-Mentor Web Test", () => {
    beforeEach(() => {
        cy.visit("https://www.growthmentor.com/");

    });

    // it("Testing SignUp Button", () => {
    //     cy.get("body > div.layout.wrap.slide > header > nav > div > div.secondary-links.d-none.d-lg-flex > a.sign-up").click();
    //     cy.get('#growthmentor-input-1').type(`${userData.firstName}`);
    //     cy.get('#growthmentor-input-2').type(`${userData.lastName}`);
    //     cy.get('#growthmentor-input-3').type(`${userData.email}`);
    //     cy.get('#growthmentor-input-4').type(`${userData.password}`);
    //     cy.get('.tw-cursor-pointer').click();

    // });

    it("Testing SignIn", () => {
        cy.get('.sign-up').click();
        cy.get(':nth-child(6) > .tw-underline').click();
        cy.get('#growthmentor-input-6').type(`${userData.email}`);
        cy.get('#growthmentor-input-7').type(`${userData.password}`);
        cy.get('#growthmentor-checkbox-8').click();
        cy.get('#app > div > div > div > form > button').click();   


        //Alias - Nickname for selector
        cy.get('.tw-divide-y > :nth-child(1) > .tw-flex > .tw-text-sm > .tw-text-base').as('signup-text');
        cy.get(':nth-child(2) > .tw-flex > .tw-text-sm > .tw-text-base').as('signup-subtext');

        //Should contain - Find a text 
        cy.get('@signup-text').should('contain', 'Founder or Co-Founder')
        cy.get('@signup-subtext').contains('Head of Growth')


    });
 
});