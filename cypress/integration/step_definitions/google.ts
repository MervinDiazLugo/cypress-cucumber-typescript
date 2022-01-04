import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { pass } from "./someFile";
import { google_homepage } from "../../support/pages/google_homepage"; 
import { config } from "../../config/config";

const localFunctionWithTypes = (a: number, b: number): number => a + b;


Given(/^I'am in main site app$/, () => {
  cy.visit(config.environment["baseUrl"]).debug();
});

And(/^I verify if input box is visible$/, () => {
  google_homepage.googleSearchBoxDisplayed()
});

And(/^I do some operations$/, () => {
  pass("hello world");
  console.log(localFunctionWithTypes(1,2) === 2)
});
