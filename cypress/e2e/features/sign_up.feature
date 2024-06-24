Feature: User Sign Up

  Scenario: User successfully signs up
    Given I am on the Sign-Up page
    When I enter a random user into the fields
    When I click the sign up button
    Then I should be redirected to the home page
    Then should see my username displayed'
