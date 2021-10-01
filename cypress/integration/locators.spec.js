/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit('/elements');
  })

  it("locating elements with get", () => {
    // Get all elements by tag name
    cy.get("button");
  })
})