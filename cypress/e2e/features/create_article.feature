Feature: Create New Article

  Scenario Outline: User successfully creates a new article
    Given I am logged in
    When I navigate to the New Article page
    When I enter "<title>" into the title field
    When I enter "<description>" into the description field
    When I enter "<body>" into the body field
    When I enter "<tags>" into the tags field
    When I click the publish article button
    Then I should be redirected to the article page
    Then I should see "<title>" as the title

    Examples:
      | title             | description                 | body                                | tags            |
      | My Second Article | Another test description    | This is the body of my second article.| test, article  |

