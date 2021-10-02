/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit('/elements');
  })

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");

    //Get all elements by className
    cy.get(".btn-with-class")

    //Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    //Get all elements by id
    cy.get("[id='form-1']")
    cy.get("#btn-with-id")
  })
})