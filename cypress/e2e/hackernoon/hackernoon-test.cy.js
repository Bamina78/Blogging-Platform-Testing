describe("testing hackernoon platform", () => {
  beforeEach(() => {
    cy.visit("https://hackernoon.com/");
  });

  it("Tests Hackernoon login", () => {
    //GET and click login button
    cy.get(".sc-db939d0-1 > div > .sc-9169e41a-0").click();
    //Type email
    cy.get("#email").type("banda.amina2@gmail.com");
    //Type password
    cy.get("#password").type("sifrasifra");
    //Press login
    cy.get("footer > .iHNhsf").click();
  });

  it("Tests Hackernoon search", () => {
    //Type React in Search
    cy.get(".ais-SearchBox-input").type("React");
    //Click second search result
    cy.get(".search-results > :nth-child(2)").click();
    //Scroll page down by 2000 px
    cy.scrollTo(0, 2000);
  });

   it('Tests Hackernoon start writing', () => {
        //GET and click login button
        cy.get(".sc-db939d0-1 > div > .sc-9169e41a-0").click();
        //Type email
        cy.get("#email").type("banda.amina2@gmail.com")
        //Type password
        cy.get("#password").type("sifrasifra")
        //Press login
        cy.get("footer > .iHNhsf").click();

    cy.visit('https://app.hackernoon.com/reader');
    cy.get('.header-links > .sc-iBYQkv > .sc-ipEyDJ > :nth-child(2)').click();
    cy.get('.editor-three').click();
    cy.get('.draft-title').type("I love you");
    cy.get('.placeholder').type("very much ljubavi");

   })
});
