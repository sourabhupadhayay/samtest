/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("login", () => {
  const email = chance.email();
  const pass = "ValidPassword23";

  beforeEach(() => {
    cy.visit("http://localhost:8100/auth/login");
  });
  it("has a title", () => {
    cy.contains("Login");
  });

  it("shows error", () => {
    // cy.pause();
    cy.get("#submitBtn").click();

    cy.contains("Email address is required");
    cy.contains("Email address is required");
  });
});
