Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://www.saucedemo.com');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html'); // Validar login
});

Cypress.Commands.add('addToCart', () => {
  cy.get('.inventory_item').each(($el) => {
    cy.wrap($el).find('button').click();
  });
  cy.get('.shopping_cart_badge').should('be.visible'); // Validar que el carrito tiene productos
});

Cypress.Commands.add('checkout', () => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type('Test');
  cy.get('[data-test="lastName"]').type('User');
  cy.get('[data-test="postalCode"]').type('12345');
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
  cy.contains('Thank you for your order!').should('be.visible'); // Validar éxito
});

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  cy.url().should('include', '/'); // Validar que regresa a la página de login
});
