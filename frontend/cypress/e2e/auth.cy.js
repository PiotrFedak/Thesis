describe('Authentication Tests', () => {
  beforeEach(() => {
    cy.visit('/Auth');
    cy.get('#flag-US').click();
  });

  it('should register a new user successfully', () => {
    cy.get('#register').click();
    cy.get('input[name="name"]').type('Test');
    cy.get('input[name="email"]').type(`test${Date.now()}@example.com`);
    cy.get('input[name="password"]').type('123');
    cy.get('input[name="password_confirmation"]').type('123');
    cy.get('#SubmitRegister').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  });
  it('should login with valid credentials', () => {
    cy.get('input[name="email"]').type('test@wp.pl');
    cy.get('input[name="password"]').type('123');
    cy.get('#SubmitLogin').click();

    cy.url().should('eq', `${Cypress.config('baseUrl')}/`);
  });
});
