Feature: Add Comment to Article

  Scenario Outline: User successfully adds a comment to an article
    Given I am on the home page
    When I select any article
    When I enter "<comment>" into the comment input field
    Then I should see "<comment>" under the article

    Examples:
      | comment                |
      | This is a test comment.|