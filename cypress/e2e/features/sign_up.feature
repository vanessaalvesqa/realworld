Feature: User Sign Up

  Scenario: User successfully signs up
    Given I am on the Sign-Up page
    When I enter a random username into the username field
    And I enter a random email into the email field
    And I enter a random password into the password field
    And I click the sign up button
    Then I should be redirected to the home page
    And I should be logged in
