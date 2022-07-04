import './commands';
import '@cypress/code-coverage/support';

declare global {
  namespace Cypress {
    interface Chainable {
      logIn(): void;
    }
  }
}
