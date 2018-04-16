describe('Why are inputs this hard?', function () {
    it('Fill the input[type="text"] box', function () {
    
      cy.visit('localhost:3000')

      cy.get('#root > div > div:nth-child(3) > input[type="text"]').type('1.7');
      cy.get('#root > div > div:nth-child(3) > input[type="text"]')
        .then( element => {
            expect(element).to.have.attr('value', '1.7');
        });
    });

    it('Fill the input[type="number"] box', function () {
    
        cy.visit('localhost:3000')
  
        cy.get('#root > div > div:nth-child(4) > input[type="number"]').type('1.9');
        cy.get('#root > div > div:nth-child(3) > input[type="text"]').click(); // comment me out to see failure
        cy.get('#root > div > div:nth-child(4) > input[type="number"]')
          .then( element => {
              expect(element).to.have.attr('value', '1.9');
          });
      })
});
