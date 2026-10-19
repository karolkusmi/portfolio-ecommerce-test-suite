Feature: category

 
  Scenario: category sidebar shows the main categories
   Given I am on the products page
   Then I should see the sidebar displayed with Women, Men and Kids categories

  Scenario: Women category shows subcategories
   Given I am on the products page
   When I click on Women category 
   Then I should see the subcategories displayed with Dress, Tops and Saree 