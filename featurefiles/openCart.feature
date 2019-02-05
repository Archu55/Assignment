Feature: OpenCart Login Functionality
  As a user of OpenCart Application
  I want to check that I should not be able to login with invalid credentials
  So that my account remains secure

  Scenario: OpenCart Login Functionality with invalid user credentials
    Given I launch the OpenCart application
    Then I verify the "OpenCart - Open Source Shopping Cart Solution" title on the page
    When I click on login
    And I enter email
    And I enter password
    And I click on login button
    Then I verify the error message
