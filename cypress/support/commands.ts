Cypress.Commands.add('logIn', () => {
  cy.get('#username-input').type('testuser');
  cy.get('#password-input').type('test123');
  cy.get('#submit-btn').click();
});
