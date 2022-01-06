import {google_page_elements as gpe} from "../page_objects/google_page_elements";
import cypress = require("cypress")
import { exists } from "fs";
import { commonFunctions } from "../../common/commonFunctions";
const CommonmFunctions: commonFunctions = new commonFunctions();

export class google_homepage{

    public static googleSearchBoxDisplayed(){
       cy.get(gpe.search_box).should('be.visible')
    }

    public static googleSetSearchBox(text:string){
        cy.get(gpe.search_box)
        .type(text)
        .should('have.value', text)
        .type('{enter}')
     }
   
     public static fixtureNameSetSearchBox(fixture:string, value:string){
      cy.log(fixture, value, gpe.search_box)
      CommonmFunctions.setEnvFixtureinTextBox(fixture, value, gpe.search_box)
   }
}