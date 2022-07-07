describe('band page', () => {
  beforeEach(() => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-band-data`, {
      statusCode: 200,
      fixture: 'band-data-successful.json',
    }).as('bandDataSuccessful');
    cy.visit('/login');
    cy.logIn();
    cy.get('#nav-band').click();
  });

  it('user should get error messages from server if needed', () => {
    cy.intercept('PUT', `${Cypress.env('API_URL')}/set-band-information`, {
      statusCode: 422,
      fixture: 'set-information-invalid.json',
    }).as('invalidInformation');
    cy.get('#set-information-btn').click();
    cy.get('#submit-btn').click();
    cy.contains('invalid information').should('be.visible');
  });

  it('user should be able to set band information', () => {
    cy.intercept('PUT', `${Cypress.env('API_URL')}/set-band-information`, {
      statusCode: 201,
      fixture: 'set-information-successful.json',
    }).as('setInformationSuccessful');
    cy.get('#set-information-btn').click();
    cy.get('#submit-btn').click();
    cy.wait(500);
  });

  it('user should be able to set band logo', () => {
    cy.intercept('PUT', `${Cypress.env('API_URL')}/set-band-logo`, {
      statusCode: 201,
      fixture: 'set-logo-successful.json',
    }).as('setLogoSuccessful');
    cy.get('#set-logo-btn').click();
    cy.get('#submit-btn').click();
    cy.get('#image-form').submit();
    cy.get('#image-input').selectFile('cypress/fixtures/img/band.png', {
      force: true,
    });
    cy.wait(500);
    cy.get('#submit-btn').click();
  });
});
