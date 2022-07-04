describe('page not found', () => {
  it('user should get a 404 page if route does not exist', () => {
    cy.visit('/test/test');
    cy.contains('404').should('be.visible');
  });

  it('user should get a 404 page if member does not exist', () => {
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
    cy.visit('/test');
    cy.contains('404').should('be.visible');
  });
});
