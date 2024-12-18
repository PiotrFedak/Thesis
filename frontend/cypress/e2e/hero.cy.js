describe('Hero Component Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  context('English Language', () => {
    beforeEach(() => {
      cy.get('#flag-US').click();
    });

    it('should display the Hero title and content correctly in English', () => {
      cy.get('#hero-title').should('exist').and('contain.text', 'Welcome to');
      cy.get('#hero-description')
        .should('exist')
        .and('contain.text', 'Explore the NBAVerse');
    });

    it('should have the Get Started button and navigate to Auth page on click in English', () => {
      cy.get('#hero-get-started')
        .should('exist')
        .and('contain.text', 'Get Started');
      cy.get('#hero-get-started').click();
      cy.url().should('include', '/Auth');
    });

    it('should have the Login link and navigate to Auth page on click in English version', () => {
      cy.get('#hero-login-link').should('exist').and('contain.text', 'Login');
      cy.get('#hero-login-link').click();
      cy.url().should('include', '/Auth');
    });
  });

  context('Polish Language', () => {
    beforeEach(() => {
      cy.get('#flag-PL').click();
    });

    it('should display the Hero title and content correctly in Polish', () => {
      cy.get('#hero-title').should('exist').and('contain.text', 'Witamy w');
      cy.get('#hero-description')
        .should('exist')
        .and('contain.text', 'Odkryj NBAVerse');
    });

    it('should have the "Zacznij" button that navigate to Auth page on click in Polish version', () => {
      cy.get('#hero-get-started')
        .should('exist')
        .and('contain.text', 'Zacznij');
      cy.get('#hero-get-started').click();
      cy.url().should('include', '/Auth');
    });

    it('should have the "Zaloguj się" link and navigate to Auth page on click in Polish version', () => {
      cy.get('#hero-login-link')
        .should('exist')
        .and('contain.text', 'Zaloguj się');
      cy.get('#hero-login-link').click();
      cy.url().should('include', '/Auth');
    });
  });
});
