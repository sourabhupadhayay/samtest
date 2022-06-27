/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("login", () => {
  const email = chance.email();
  const phone = chance.phone();

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/auth/signup");
  });
  it("has a title", () => {
    cy.contains("Signup");
  });

  it("should show error message if email is not entered", () => {
    // cy.pause();
    cy.get("ion-checkbox[name=checkbox]").click();
    cy.get("ion-button[name=submit]").click();
    cy.contains("Email address is required");
  });

  it("should sign up new user", () => {
    cy.get("input[type=email]").type(email);
    cy.get("input[type=phone]").type(phone);
    cy.get("ion-checkbox[name=checkbox]").click();
    cy.get("ion-button[name=submit]")
      .click()
      .then(() => {
        cy.url().should("include", "verify-otp");
      });
  });
});
