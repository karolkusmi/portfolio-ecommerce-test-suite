Feature: category

 
  Scenario: category sidebar shows the main categories
   Given I am on the products page
   Then I should see the sidebar displayed with Women, Men and Kids categories

  Scenario: Women category shows subcategories
   Given I am on the products page
   When I click on Women category 
   Then I should see the subcategories displayed with Dress, Tops and Saree 

  Scenario Outline: navigate to a subcategory shows its products page
   Given I am on the products page
   When I click on category "<category>"
   And I click on subcategory "<subcategory>"
   Then I should see "<category>" and "<subcategory>" title name

   Examples:
    | category | subcategory   |
    | Women    | Dress         | 
    | Women    | Tops          |
    | Women    | Saree         |
    | Men      | Tshirts       |
    | Men      | Jeans         |
    | Kids     | Dress         |
    | Kids     | Tops & Shirts |       

