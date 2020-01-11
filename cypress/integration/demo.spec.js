describe('Hello World Test', () => {

    beforeEach(() => {
        // Start Fake API server
        cy.server()
        cy.route({
          method: 'GET',
          url: '/index.php?rest_route=/wp/v2/posts',
          response: [
              {
                  "userId": 1,
                  "id": 1,
                  "title": "Title 1",
                  "body": "Body 1"
              }
          ]
        })
      })

    it('Show สวัสดีชาวโลก', () => {
        cy.visit('https://edison-frontend.artisandigital.tech/')
        
    })

})