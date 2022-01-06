import { config } from "../../config";

export var keyValue: string = ""

export class commonFunctions {

    public setEnvFixtureinTextBox(file : string, key : string, locator : string){
        cy.fixture(config.getFixturesConfiguration[file]).then(async (env)=>{
            switch(config.getCurrentEnv)
                {
                    case "dev":
                        keyValue = env.dev[key]
                        break;
                    case "test":
                        keyValue = env.test[key]
                        break;
                } 
            cy.get(locator)
            .type(keyValue)
            .should('have.value', keyValue)
            .type('{enter}')
        });
    }
    public async getEnvFixtures(file : string, key : string){
        cy.fixture(config.getFixturesConfiguration[file]).then(async (env)=>{
            switch(config.getCurrentEnv)
                {
                    case "dev":
                        keyValue = env.dev[key]
                        break;
                    case "test":
                        keyValue = env.test[key]
                        break;
                } 
            return keyValue;
        })
    }
}