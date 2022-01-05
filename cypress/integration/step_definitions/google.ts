import { And, Given } from "cypress-cucumber-preprocessor/steps";
import { pass } from "./someFile";
import { google_homepage } from "../pages/google_homepage"; 
import { config } from "../../config/config";

const localFunctionWithTypes = (a: number, b: number): number => a + b;

//hooks
beforeEach(() => {
  cy.log("	It runs once before starting the execution of first tests specified using “it” or “specify” in the “describe” or “context” block.")
});
before(() => {
  cy.log("It runs before starting the execution of each of the tests specified using “it” or “specify” in the “describe” or “context” block.")
});

after(() => {
  cy.log("It runs once after completion of all the tests specified using “it” or “specify” in the “describe” or “context” block.")
});

afterEach(() => {
  cy.log("	It runs after finishing the execution of each of the tests specified using “it” or “specify” in the “describe” or “context” block.")
});

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

And(/^I Set '(.*?)' on google searchbox$/, async (text)=> {
  google_homepage.googleSetSearchBox(text)
});
