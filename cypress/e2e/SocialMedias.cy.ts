describe('social media page', () => {
  beforeEach(() => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-social-medias`, {
      statusCode: 200,
      fixture: 'social-medias-successful.json',
    }).as('socialMediasSuccessful');
    cy.visit('/login');
    cy.logIn();
    cy.get('#nav-social-medias').click();
  });

  it('user should be able to add a social media', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/add-social-media`, {
      statusCode: 200,
      fixture: 'add-social-media-successful.json',
    }).as('addSocialMediasSuccessful');
    cy.get('#add-social-media-btn').click();
    cy.get('#name-input').type('Twitter');
    cy.get('#link-input').type('https://twitter.com');
    cy.get('#submit-btn').click();
    cy.wait(500);
  });

  it('user should be able to change social media icon', () => {
    cy.intercept('PUT', `${Cypress.env('API_URL')}/change-social-media-icon`, {
      statusCode: 200,
      fixture: 'change-icon-successful.json',
    }).as('changeIconSuccessful');
    cy.get('#Twitter-change-icon-btn').click();
    cy.get('#submit-btn').click();
    cy.get('#image-form').submit();
    cy.get('#image-input').selectFile('cypress/fixtures/img/social-media.png', {
      force: true,
    });
    cy.wait(500);
    cy.get('#submit-btn').click();
  });

  it('user should be able to edit a social media', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/get-social-media`, {
      statusCode: 200,
      fixture: 'social-media-successful.json',
    }).as('memberSuccessful');
    cy.intercept('PUT', `${Cypress.env('API_URL')}/edit-social-media`, {
      statusCode: 201,
      fixture: 'edit-social-media-successful.json',
    }).as('editMemberSuccessful');
    cy.get('#Twitter-edit-btn').click();
    cy.get('#submit-btn').click();
    cy.wait(500);
  });

  it('user should be able to delete a delete social media', () => {
    cy.intercept('DELETE', `${Cypress.env('API_URL')}/delete-social-media`, {
      statusCode: 200,
      fixture: 'delete-social-media-successful.json',
    }).as('deleteSocialMediaSuccessful');
    cy.get('#Twitter-remove-btn').click();
    cy.get('#Twitter-remove-yes-btn').click();
    cy.get('#Twitter-remove-no-btn').click();
  });
});
