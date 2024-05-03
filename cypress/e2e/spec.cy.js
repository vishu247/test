describe('Google Search', () => {
  it('should return search results', () => {
    // Visit Google homepage
    cy.visit('https://www.google.com');

    // // Wait for the search input field to be visible and then type "Cypress testing" into it
    cy.get('textarea[name="q"]', { timeout: 10000 }).type('Cypress testing').type('{enter}');

    
    // // Wait for search results to load
    cy.get('div#search').should('be.visible');

    // // Verify that the search results contain relevant information
    cy.get('div#search').contains('Cypress: Testing Frameworks for Javascript | Write, Run, Debug');

    // // Click on the Cypress website link in the search results
    cy.contains('Cypress: Testing Frameworks for Javascript | Write, Run, Debug').click();

    // // Verify that we have been redirected to the Cypress website
    // cy.url().should('include', 'https://www.cypress.io/');
  });
});
