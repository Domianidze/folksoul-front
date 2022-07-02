describe('login page', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('user should get errors if no user', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 404,
      fixture: 'login-no-user.json',
    }).as('loginNoUser');
    cy.logIn();
    cy.contains('მომხმარებელი ამ მეტსახელით ვერ მოიძებნა').should('be.visible');
  });

  it('user should get errors if wrong password', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 401,
      fixture: 'login-wrong-password.json',
    }).as('loginWrongPassword');
    cy.logIn();
    cy.contains('პაროლი არასწორია').should('be.visible');
  });

  it('user should not get error if its not validation error', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 401,
    }).as('loginFailed');
    cy.logIn();
    cy.get('#welcome-text').should('not.exist');
  });

  it('user should be able to log in', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
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
    cy.logIn();
    cy.get('#welcome-text').should('be.visible');
    cy.get('#nav-logout').click();
    cy.get('#welcome-text').should('not.exist');
  });
});
