Feature: cart

    Scenario: Added product appears in the cart
     Given I am on the products page
     When I add the first product to the cart
     And I go to the cart page
     Then I should see the first product visible in the cart

    Scenario: Adding the same product twice increases the quantity
     Given I am on the products page
     When I add the first product to the cart twice
     And I go to the cart page
     Then I should see that the quantity of the product is two

    Scenario: Modal appears after adding a product to the cart
     Given I am on the products page
     When I add the first product to the cart
     Then I should see the modal displayed

    Scenario: Modal closes after clicking continue shopping
     Given I am on the products page
     When I add the first product to the cart
     And I click on continue shopping on the modal
     Then I should see that the modal is closed

    Scenario: Modal takes me to the cart page
     Given I am on the products page
     When I add the first product to the cart
     And I click on view cart on the modal
     Then I should see the cart page




   