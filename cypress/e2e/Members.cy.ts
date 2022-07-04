describe('members page', () => {
  beforeEach(() => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/login`, {
      statusCode: 200,
      fixture: 'login-successful.json',
    }).as('loginSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-members`, {
      statusCode: 200,
      fixture: 'members-successful.json',
    }).as('membersSuccessful');
    cy.visit('/login');
    cy.logIn();
    cy.get('#nav-members').click();
    cy.get('#pagination-btn-1').click();
  });

  it('user should be able to add a member', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/add-member`, {
      statusCode: 200,
      fixture: 'add-member-successful.json',
    }).as('addMemberSuccessful');
    cy.get('#add-member-btn').click();
    cy.get('#name-input').type('გელა');
    cy.get('#instrument-input').type('გიტარა');
    cy.get('#orbit-width-input').type('32');
    cy.get('#biography-textarea').type('გიტარისტი გელა');
    cy.get('#submit-btn').click();
    cy.wait(500);
  });

  it('user should be able to change member avatar', () => {
    cy.intercept('PUT', `${Cypress.env('API_URL')}/change-member-avatar`, {
      statusCode: 200,
      fixture: 'change-avatar-successful.json',
    }).as('changeAvatarSuccessful');
    cy.get('#გელა-change-avatar-btn').click();
    cy.get('#submit-btn').click();
    cy.get('#image-form').submit();
    cy.get('#image-input').selectFile('cypress/fixtures/img/member.png', {
      force: true,
    });
    cy.wait(500);
    cy.get('#submit-btn').click();
  });

  it('user should be able get detailed data about a member', () => {
    cy.get('#გელა-details-btn').click();
    cy.contains('გიტარისტი გელა.').should('be.visible');
    cy.get('#modal-close-btn').click();
  });

  it('user should be able to edit a member', () => {
    cy.intercept('POST', `${Cypress.env('API_URL')}/get-member`, {
      statusCode: 200,
      fixture: 'member-successful.json',
    }).as('memberSuccessful');
    cy.intercept('PUT', `${Cypress.env('API_URL')}/edit-member`, {
      statusCode: 201,
      fixture: 'edit-member-successful.json',
    }).as('editMemberSuccessful');
    cy.get('#გელა-edit-btn').click();
    cy.get('#submit-btn').click();
    cy.wait(500);
  });

  it('user should be able to delete a member', () => {
    cy.intercept('DELETE', `${Cypress.env('API_URL')}/delete-member`, {
      statusCode: 200,
      fixture: 'delete-member-successful.json',
    }).as('deleteMemberSuccessful');
    cy.intercept('GET', `${Cypress.env('API_URL')}/get-members`, {
      statusCode: 200,
      fixture: 'deleted-members-successful.json',
    }).as('deletedMembersSuccessful');
    cy.get('#გელა-remove-btn').click();
    cy.get('#გელა-remove-no-btn').click();
    cy.get('#გელა-remove-btn').click();
    cy.get('#გელა-remove-yes-btn').click();
    cy.wait(500);
  });
});
