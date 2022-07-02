describe('welcome text', () => {
  beforeEach(() => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.visit('/login');
  });

  it('user should get good morning text if its the morning', () => {
    const now = Date.UTC(0, 0, 0, 8, 0, 0);
    cy.clock(now, ['Date']);
    cy.logIn();
    cy.contains('დილამშვიდობის!').should('be.visible');
  });

  it('user should get good afternoon text if its the afternoon', () => {
    const now = Date.UTC(0, 0, 0, 14, 0, 0);
    cy.clock(now, ['Date']);
    cy.logIn();
    cy.contains('შუადღემშვიდობის!').should('be.visible');
  });

  it('user should get good evening text if its the evening', () => {
    const now = Date.UTC(0, 0, 0, 20, 0, 0);
    cy.clock(now, ['Date']);
    cy.logIn();
    cy.contains('საღამომშვიდობის!').should('be.visible');
  });
});
