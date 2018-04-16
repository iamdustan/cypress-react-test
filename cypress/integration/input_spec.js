describe('Why are inputs this hard?', function() {
  it('Fill the input[type="text"] box', function() {
    cy.visit('localhost:3000');

    cy.get('input[name="text"]').type('1.7');
    cy
      .get('input[name="text"]')
      .should('have.value', '1.7');
  });

  it('Fill the input[type="number"] box', function() {
    cy.visit('localhost:3000');

    cy.get('input[name="number"]').type('1.9');
    cy
      .get('input[type="number"]')
      .should('have.value', '1.9');
  });
});
