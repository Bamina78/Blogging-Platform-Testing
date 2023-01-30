describe("hashnode web test", () => {
  beforeEach(() => {
    cy.visit("https://hashnode.com/");
  });

  it("Test Hasnnode magic link signup", () => {
    cy.get(".css-1hcbfrb > span").click();
    cy.get(".css-15aievv").type("banda.amina2@gmail.com");
    cy.get(".css-xpx7qy").click();
  });

  it("Test search button", () => {
    cy.get('.css-j23x7g').click();
    cy.get('.css-1rv4lcm > [href="/search"]').click();
    cy.get('.css-35vhr8').type("How to make use of CSS Flex-box");
    cy.get('[style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"] > img').click();

  });

 it("Testing My Feed button", () => {
    cy.get('.css-j23x7g').click();
    cy.get('.css-1rv4lcm > [href="/community"]').click();
    cy.get(':nth-child(2) > .css-1s8wn94 > .css-1wg9be8 > .css-1abv9a9 > .css-1m4ptby > .css-4zleql').click();
 });


});
