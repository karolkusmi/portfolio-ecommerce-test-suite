Feature: product details


    Scenario: first product appears in product detail page
     Given I am on the products page
     When I click on the first product view product
     Then I should see the first product name

    Scenario: first product details are visible
     Given I am on the products page
     When I click on the first product view product
     Then I should see product "availability"
     And I should see product "condition"
     And I should see product "brand"
     And I should see product "category"
     
     
    Scenario: Adding quantity of three of the first product from product details page
     Given I am on the products page
     When I click on the first product view product
     And I select the quantity of three
     And I click add to cart
     And I go to the cart page
     Then I should see that the quantity of the first product is three

     