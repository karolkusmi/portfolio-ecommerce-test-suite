Feature: products


 Scenario: Products are displayed
  Given I am on the products page
  Then I should see the products list

 Scenario: Searching product name on the search bar
  Given I am on the products page
  When I search "blue" on the search bar
  Then I should see products that contain "blue"