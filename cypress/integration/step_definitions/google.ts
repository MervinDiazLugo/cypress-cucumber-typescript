import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { pass } from "./someFile";
import { google_homepage } from "../../support/pages/google_homepage"; 
import { config } from "../../config/config";

const localFunctionWithTypes = (a: number, b: number): number => a + b;

Given(/^I pass$/, () => {
  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
  cy.visit(config.environment["baseUrl"]).debug();
  google_homepage.googleSearchBoxDisplayed()
});

And(/^I verify$/, () => {
  google_homepage.googleSearchBoxDisplayed()
});
