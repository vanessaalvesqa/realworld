Feature: User Sign In

  Scenario Outline: User signs in
    Given I am on the Sign-In page
    When I enter the email "<email>" into the email field
    And I enter the password "<password>" into the password field
    And I click the sign in button
    Then I should be redirected to the home page

    Examples:
      | email                   | password  |
      | testqaengineer@test.com | Test@123  |

