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
    cy.contains("Password is required");
  });

  it("log in as random user", () => {
    //fill the form
    cy.get("input[type=email]").type(email);
    cy.get("input[type=password]").type(pass);
    cy.get("#submitBtn").click();
    cy.pause();

    // cy.contains("");
  });
});
