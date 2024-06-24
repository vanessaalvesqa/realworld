Feature: Add Comment to Article

  Scenario Outline: User successfully adds a comment to an article
    Given I am logged in
    And I am on the article page for "<article_title>"
    When I enter "<comment>" into the comment input field
    Then I should see "<comment>" under the article

    Examples:
      | article_title     | comment                |
      | My Second Article  | This is a test comment.|
