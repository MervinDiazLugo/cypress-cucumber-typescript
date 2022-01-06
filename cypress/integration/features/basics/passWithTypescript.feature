Feature: Passing cucumber test with TypeScript
  
 @ignore
 Scenario: Verify google input box
   Given I'am in main site app
   And I verify if input box is visible
   Then I do some operations
  
 @ignore 
 Scenario: Searchbox google 
   Given I'am in main site app
   And I Set 'Hola Mundo!' on google searchbox
   Then I Set a custom step definition 'test text'
       
Scenario: Using fixtures Searchbox google 
  Given I'am in main site app
  And I use 'example' fixture and put 'name' on google searchbox
