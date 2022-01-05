import {google_page_elements as gpe} from "../page_objects/google_page_elements";
import cypress = require("cypress")
import { exists } from "fs";

export class google_homepage{

    public static googleSearchBoxDisplayed(){
       cy.get(gpe.search_box).should('be.visible')
    }

    public static googleSetSearchBox(text){
        cy.get(gpe.search_box)
        .type(text)
        .should('have.value', text)
     }
}