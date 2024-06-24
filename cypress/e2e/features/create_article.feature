Feature: Create New Article

  Scenario Outline: User successfully creates a new article
    Given I am logged in
    When I navigate to the New Article page
    And I enter "<title>" into the title field
    And I enter "<description>" into the description field
    And I enter "<body>" into the body field
    And I enter "<tags>" into the tags field
    And I click the publish article button
    Then I should be redirected to the article page
    And I should see "<title>" as the title

    Examples:
      | title             | description                 | body                                | tags            |
      | My Second Article | Another test description    | This is the body of my second article.| test, article  |

