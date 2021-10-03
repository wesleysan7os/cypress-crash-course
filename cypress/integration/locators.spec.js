describe("Locators", () => {
  beforeEach(() => {
    cy.visit('/elements');
  })

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");

    // Get all elements by className
    cy.get(".btn-with-class")

    // Get all elements with specific classes
    cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

    // Get all elements by id
    cy.get("[id='form-1']")
    cy.get("#btn-with-id")

    // Getl all elements by specific attribute 
    cy.get("[type='submit']")

    // Gell all elements by tag name AND class
    cy.get("button.Elements-btn")

    // Get all elements by tag name AND class AND id
    cy.get("button.Elements-btn#btn-with-id")

    // Get all elements by tag name AND class AND type attribute
    cy.get("button.Elements-btn[type='submit']")

    // Gel all elements by with specific data test id
    cy.get("[data-cy='btn-id-1']")
    cy.getByTestId("btn-id-1")
  })

  it("locating elements with contains", () => {
    // Get element by text
    cy.contains("Unique Text")

    // Get element by text (not unique)
    cy.contains("Not Unique Text")

    // Get element by selector 
    cy.contains("[type='submit']", "Not Unique Text")

    // find the form element, and then the element that contains "Not Unique Text"
    // inside of that form element
    cy.contains("form", "Not Unique Text")

    cy.get("[type='submit']").contains("Not Unique Text")
  })

  it("locating elements with find", () => {
    cy.get("#form-1").find(".btn-1")
    cy.get("#form-1").find(".btn-2")
  })
})