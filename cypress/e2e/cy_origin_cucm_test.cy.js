it("does not work", () => {
  cy.visit("https://192.168.124.70")
  cy.origin("https://192.168.110.192", () => {
    cy.visit("/")
    cy.contains("Cisco Unified Communications Manager").click()
    cy.get('[name="j_username"]').type("test123")
    cy.get('[name="j_password"]').type("test123")
    cy.get("form").submit()
  })
})
