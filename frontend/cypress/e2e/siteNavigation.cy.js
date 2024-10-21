describe('Site Navigation Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  context('Check navigation', () => {
    beforeEach(() => {
      cy.get('#flag-US').click();
    });

    it('should navigate through different links from the homepage', () => {
      cy.get('#navbar').should('exist');

      cy.get('a').contains('Teams').click();
      cy.url().should('include', '/Teams');
      cy.go('back');

      cy.get('a').contains('Players').click();
      cy.url().should('include', '/Players');
      cy.go('back');

      cy.get('#flag-PL').click();
      cy.get('a').contains('Drużyny').click();
      cy.url().should('include', '/Teams');
      cy.go('back');

      cy.get('a').contains('zawodnicy').click();
      cy.url().should('include', '/Players');
      cy.go('back');
    });
  });
});
