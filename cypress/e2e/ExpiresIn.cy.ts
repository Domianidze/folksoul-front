describe('expires in', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('user should get be logged out after 300 seconds', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-expires-in-300s.json',
    }).as('loginExpiresIn300s');
    cy.logIn();
  });

  it('user should get be logged out after 30 minutes', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-expires-in-30m.json',
    }).as('loginExpiresIn30m');
    cy.logIn();
  });

  it('user should get be logged out after 3 hours', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-expires-in-3h.json',
    }).as('loginExpiresIn3h');
    cy.logIn();
  });
});
