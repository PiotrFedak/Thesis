describe('TeamHero Component Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  context('Team Navigation Test', () => {
    beforeEach(() => {
      cy.get('#flag-US').click();
    });

    it('should switch between different teams', () => {
      cy.window().scrollTo(0, 1650);
      cy.get('.card-title').should('contain.text', 'Los Angeles Lakers');

      cy.get('#next-team').click();
      cy.get('.card-title').should('contain.text', 'Chicago Bulls');

      cy.get('#next-team').click();
      cy.get('.card-title').should('contain.text', 'Toronto Raptors');
    });

    it('should display section about team history', () => {
      cy.get('.card-title').should('contain.text', 'Los Angeles Lakers');

      cy.get('.timeline').within(() => {
        cy.get('.timeline-start').should('contain.text', '1980');
        cy.get('.timeline-end').should(
          'contain.text',
          'Won their 7th NBA Championship'
        );
      });

      cy.get('#next-team').click();
      cy.get('.timeline').within(() => {
        cy.get('.timeline-start').should('contain.text', '1991');
        cy.get('.timeline-end').should(
          'contain.text',
          'Won their first NBA Championship'
        );
      });
    });
  });

  context('Polish Language Team Test', () => {
    beforeEach(() => {
      cy.get('#flag-PL').click();
    });

    it('should navigate through teams in Polish', () => {
      cy.get('.card-title').should('contain.text', 'Los Angeles Lakers');
      cy.get('#next-team').click();
      cy.get('.card-title').should('contain.text', 'Chicago Bulls');
      cy.get('#next-team').click();
      cy.get('.card-title').should('contain.text', 'Toronto Raptors');
    });

    it('should display team history in Polish', () => {
      cy.get('.card-title').should('contain.text', 'Los Angeles Lakers');

      cy.get('.timeline').within(() => {
        cy.get('.timeline-start').should('contain.text', '1980');
        cy.get('.timeline-end').should(
          'contain.text',
          'Zdobyli swoje 7. mistrzostwo NBA'
        );
      });

      cy.get('#next-team').click();
      cy.get('.timeline').within(() => {
        cy.get('.timeline-start').should('contain.text', '1991');
        cy.get('.timeline-end').should(
          'contain.text',
          'Zdobyli swoje pierwsze mistrzostwo NBA'
        );
      });
    });
  });
});
