import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { config } from "../../../config";

const localFunctionWithTypes = (a: number, b: number): number => a + b;


Then(/^I Set a custom step definition '(.*?)'$/, async (text)=> {
  cy.log(text)
});

