/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("login", () => {
  const email = chance.email();
  const pass = "ValidPassword23";

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.visit("/auth/login");
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
    cy.get("#submitBtn")
      .click()
      .should(() => {
        expect(localStorage.getItem("authDetail")).to.be.null;
      });
  });

  it("should login as current user ", () => {
    cy.login("bubbly@yopmail.com", "Test@123").should(() => {
      expect(localStorage.getItem("authDetail")).to.be.not.null;
    });
    // cy.get("input[type=email]").type("bubbly@yopmail.com");
    // cy.get("input[type=password]").type("Test@123");
    // cy.get("#submitBtn")
    //   .click()

    cy.url().should("include", "bubble-screen");
  });
});
