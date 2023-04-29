// <reference types="cypress" />

import '@cypress/code-coverage/support';
afterEach(() => {
  cy.window().trigger('unload');
});
describe('links works', () => {
  it('checks About link works', () => {
    cy.visit('/');

    cy.get('a').contains('About').click();

    cy.url().should('include', '/about');
  });
  it('Home link works', () => {
    cy.visit('/forms');

    cy.get('a').contains('Home').click();

    cy.url().should('include', '/');
  });
});
describe('test Home page', () => {
  it('rendered cards', () => {
    cy.visit('/');
    cy.contains('Rick Sanchez').should('have.class', 'card-item__title');
  });
  it('input value test', () => {
    cy.visit('/');
    cy.get('input').type('rick{enter}').should('have.value', 'rick');
  });
  it('modal test', () => {
    cy.visit('/');

    cy.contains('Rick Sanchez').click();

    cy.get('span').contains('Species:').should('have.class', 'description-item__span');
  });
  describe('test main page', () => {
    it('rendered forms', () => {
      cy.visit('/forms');
      cy.contains('Card constructor').should('have.class', 'forms__title');
    });
  });
});
