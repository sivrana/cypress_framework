describe('empty spec', () => {
  it('Opens the website', () => {
    cy.visit('http://automationpractice.com/index.php')
  })
})

describe('first test',()=> {
  it("Testing the website",()=>{
    cy.get('#search_query_top').type('hello')
  })
})

