/// <reference types="cypress" />

import Chance from "chance";
const chance = new Chance();

describe("edit-profile", () => {
  const name = chance.name();
  const phone = chance.phone();
  const birthDay = chance.birthday({ string: true, american: true });
  const team = chance.word();
  const country = chance.country();
  const state = chance.state();

  beforeEach(() => {
    cy.viewport("iphone-x");
    cy.login("bubbly@yopmail.com", "Test@123").should(() => {
      expect(localStorage.getItem("authDetail")).to.be.not.null;
    });
  });

  afterEach(() => {
    // cy.logout();
  });

  //   it("should land on home screen", () => {
  //     cy.url().should("include", "tabs/home");
  //   });

  //   it("should go to edit profile page screen", () => {
  //     cy.get('[data-cy="profile"]').click();
  //     cy.url().should("include", "tabs/profile");
  //   });

  it("user should be able to edit his information", () => {
    cy.get('[data-cy="profile"]').click();
    cy.get('[data-cy="edit-profile"]').click();

    cy.get('[data-cy="fullName"]').clear().type(name);
    cy.get('[data-cy="phone"]').clear().type(phone);
    cy.get('[data-cy="team"]').clear().type(team);
    cy.get('[data-cy="country"]').clear().type(country);
    cy.get('[data-cy="state"]').clear().type(state);
    cy.get('[data-cy="submit-info"]').click();
    cy.get('[data-cy="submit-modal"]').click();

    cy.url().should("include", "tabs/profile");
  });

  it("user must enter required details", () => {
    cy.get('[data-cy="profile"]').click();
    cy.get('[data-cy="edit-profile"]').click();

    cy.get('[data-cy="fullName"]').clear();

    cy.get('[data-cy="submit-info"]').click();

    cy.contains("Full name is invalid");

    // cy.get('[data-cy="submit-modal"]').click();

    // cy.url().should("include", "tabs/profile");
  });
});
