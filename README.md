<p align="center">
   <i><strong>This project demonstrates the basic cypress-cucumber-typescript framework project setup.
</strong></i>
<p>

---


### cypress-cucumber-typescript Setup Guide   


### Features
* All scripts written with > Typescript2.0 & Cucumber2.0.
* Neat folder structures with transpiled js files in separate output folder.
* Page Object design pattern implementation. (in progress)
* Extensive hooks implemented for BeforeFeature, AfterScenarios etc. (pending)
* Screenshots on failure feature scenarios. (pending)


### To Get Started

#### Pre-requisites
1.NodeJS installed globally in the system.
https://nodejs.org/en/download/

2.Text Editor(Optional) installed-->Sublime/Visual Studio Code/Brackets.

#### Setup Scripts
* Clone the repository into a folder
* Go inside the folder and run following command from terminal/command prompt
```
npm clean-install 
```
* All the dependencies from package.json and ambient typings would be installed in node_modules folder.

#### Run Scripts

```
npm run test
``` 

* The below command would create an output folder named 'typeScript' and transpile the .ts files to .js.
```
npm run build
```

* you have 2 diffrent reports, a default report and another one. just excute:
```
npm report
```
* to clean reports folder
```
npm run clean-reports
```

#### Writing Features
```
Feature: To search typescript in google
@TypeScriptScenario

  Scenario: Typescript Google Search
    Given I am on google page
    When I type "Typescript"
    Then I click on search button
    Then I clear the search text
```
#### Writing Step Definitions
    
```
import { And, Given } from "cypress-cucumber-preprocessor/steps";
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
```

#### Writing Page Objects
```
export class google_page_elements{
    static search_box = "input[name='q']";
    static image_link = ":nth-child(2) > .gb_g";
    static gmail_link : string = ":nth-child(1) > .gb_g";
    static google_logo = "img[alt='Google']";
    static search_button = ".FPdoLc > center > .gNO89b";

    constructor() {
    }
}
```

#### CucumberOpts Tags
Following configuration shows to call specific tags from feature files
```
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": false,
    "stepDefinitions": "cypress/integration/step_definitions/**/",
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/reports/cucumber-json/",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
  }
},
```
#### HTML Reports
Currently this project has been integrated with [multiple-cucumber-html-reporter](https://www.npmjs.com/package/multiple-cucumber-html-reporter), which is generated in the `reports` folder when you run `npm test`.
They can be customized according to user's specific needs.


## Contributions
For contributors who want to improve this repo by contributing some code, reporting bugs, issues or improving documentation - PR's are highly welcome, please maintain the coding style , folder structure , detailed description of documentation and bugs/issues with examples if possible.

## Contributors
for now just me:
[Mervin Diaz Lugo <mervindiazlugo@gmail.com>](https://github.com/MervinDiazLugo)