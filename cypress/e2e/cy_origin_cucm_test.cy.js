it("CUCM Validation", () => {
  cy.origin("https://192.168.110.192/ccmadmin", () => {
    cy.visit("/")
    cy.get('[name="j_username"]').type("test123")
    cy.get('[name="j_password"]').type("test123")
    cy.get("form").submit()
  })
})
