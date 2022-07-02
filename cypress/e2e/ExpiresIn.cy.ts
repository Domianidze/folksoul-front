describe('expires in', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('user should get be logged out after 300 seconds', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-300s.json',
    }).as('login300s');
    cy.logIn();
  });

  it('user should get be logged out after 30 minutes', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-30m.json',
    }).as('login30m');
    cy.logIn();
  });

  it('user should get be logged out after 3 hours', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-3h.json',
    }).as('login3h');
    cy.logIn();
  });
});
