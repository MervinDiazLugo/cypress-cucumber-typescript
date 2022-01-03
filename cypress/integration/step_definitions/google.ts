import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { createJSDocTypeExpression, createYield } from "typescript";
import { pass } from "./someFile";
import cypress = require("cypress")
import { google_homepage } from "../../support/pages/google_homepage"; 

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given(/^I pass$/, () => {
  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
  cy.visit('www.google.com').debug();
  google_homepage.googleSearchBoxDisplayed()

});

And(/^I verify$/, () => {
  google_homepage.googleSearchBoxDisplayed()
});
