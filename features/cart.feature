Feature: cart

    Scenario: Added product appears in the cart
     Given I am on the products page
     When I add the first product to the cart
     Then I should see the first product visible in the cart

    Scenario: Adding the same product twice increases the quantity
     Given I am on the products page
     When I add the first product to the cart twice 
     Then I should see that the quantity of the product is two