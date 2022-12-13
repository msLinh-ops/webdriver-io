Feature: The sample test for API Testing
  Scenario Outline: GET - As a user, I want to get User list by making REST API request

    When User calls API to get User list
    Then Response returns status code is 200
    And  Verify the total of record must equal "<totalNumber>"


  Scenario Outline: POST - As a user, I want to create new User by making REST API request
    When  User calls API to create a new User
    Then  Status code is 201

  Scenario Outline: PATCH - As a user, I want to update current User by making REST API request
    When  User calls API to update an existing User
    Then  Response must return status code is 201
    When  User calls API to view updated User
    Then  Response must return status code is 200
    And   Updated information is dispalyed

  Scenario Outline: DELETE - As a user, I want to Delete an existing User by making REST API request
    When User calls API to Delete an existing User
    Then Response must return status code is 204



