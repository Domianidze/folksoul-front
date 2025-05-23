describe('login page', () => {
  beforeEach(() => {
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-members`, {
      statusCode: 200,
      fixture: 'members-successful.json',
    }).as('membersSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-band-data`, {
      statusCode: 200,
      fixture: 'band-data-successful.json',
    }).as('bandDataSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-social-medias`, {
      statusCode: 200,
      fixture: 'social-medias-successful.json',
    }).as('socialMediasSuccessful');
    cy.visit('/login');
  });

  it('user should get errors if no user or wrong password', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 404,
      fixture: 'login-no-user.json',
    }).as('loginNoUser');
    cy.logIn();
    cy.contains('მეტსახელი ან პაროლი არასწორია').should('be.visible');
  });

  it('user should not get error if its not validation error', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 401,
    }).as('loginFailed');
    cy.logIn();
    cy.get('#welcome-text').should('not.exist');
  });

  it('user should be able to log in, stay logged in and log out', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.logIn();
    cy.wait(500);
    cy.reload();
    cy.get('#welcome-text').should('be.visible');
    cy.get('#nav-logout').click();
    cy.get('#welcome-text').should('not.exist');
  });

  it('user should not stay logged in if token expired', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-expires-in-5s.json',
    }).as('loginExpiresIn5s');
    cy.logIn();
    cy.wait(500);
    cy.reload();
    cy.get('#welcome-text').should('not.exist');
  });
});
