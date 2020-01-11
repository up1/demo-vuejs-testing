/// <reference types="Cypress" />

describe('Hello World Test', () => {

        beforeEach(() => {
      // Start Fake API server
      cy.server()
      cy.route({
        method: 'GET',
        url: '/posts',
        response: [
            {
                "userId": 1,
                "id": 1,
                "title": "Title 1",
                "body": "Body 1"
            },
            {
                "userId": 2,
                "id": 2,
                "title": "Title 2",
                "body": "Body 2"
            }
        ]
      })
    })
  
    context('When page is opened', () => {
      it('Show สวัสดีชาวโลก', () => {
        cy.visit('http://localhost:8080/')
        cy.get('.posts--list').find('>div').should('have.length', 2)
      })
    })
  
  })