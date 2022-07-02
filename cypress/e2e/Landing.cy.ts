describe('landing page', () => {
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
    cy.visit('/');
  });

  it('user should be get detailed data about a member', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.get('#member').click();
    cy.contains('გიტარისტი გელა.').should('be.visible');
  });
});
