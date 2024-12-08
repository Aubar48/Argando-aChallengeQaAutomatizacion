const users = require('../fixtures/users.json'); // Asegúrate de que la ruta sea correcta

describe('SauceDemo Test Suite', { testIsolation: false }, () => {
  users.forEach(user => {
    it(`Compra con ${user.username}`, () => {
      cy.login(user.username, user.password);
      cy.addToCart();
      cy.checkout();
      cy.logout();
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  });
});
