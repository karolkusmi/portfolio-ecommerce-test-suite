Feature: login 


  Scenario: Log in with valid credentials
    Given I am on the login page
    When I log in with valid credentials
    Then I should see the home page 


  Scenario: Log in with invalid credentials
    Given I am on the login page
    When I log in with invalid credentials
    Then I should see an error message
    

