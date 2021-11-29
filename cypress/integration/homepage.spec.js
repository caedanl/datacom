const baseUrl = Cypress.config().baseUrl

describe('Renders the home page', () => {
   beforeEach(() => {
      cy.visit('/')
   });
   
   it('Renders submit button correctly', () => {
      cy.get('#submitButton').should('exist');
      cy.get('span.error').each(($el) => {
         cy.wrap($el).should('be.empty');
      })
   });
   
   it('Renders admin page correctly', () => {
      cy.get('#signInButton').click();
      cy.url().should('include', 'admin');
      cy.get('#logo').click();
      cy.url().should('eq', baseUrl);
   });

   // it('Returns to home page correctly', () => {
   // })

   it('Form handles errors correctly', () => {
      cy.get('#submitButton').click();
      cy.get('span.error').each(($el) => {
         cy.wrap($el).should('not.be.empty');
      })
      cy.get('#firstNameInput').type('foo');
      cy.get('span.error').should('be.empty');
   });
})



