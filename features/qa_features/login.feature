Feature: The sample test for Web Application
  Background: Background name
    Given User is on the login page

  Scenario Outline: As a user, I want to login web portal successful with invalid credential

    
    When User logins with invalid "<username>" and "<password>"
    Then User should be promped an Error message with text "<errAlert>"

    Examples:
      | username  | password | errAlert |
      | Tester111 | Test@123 | Error!   |

  Scenario Outline: As a user, I want to login web portal successful with valid credential

  
    
    When User logins with "<username>" and "<password>"
    Then User should be navigated to page with "<pageTitle>"

    Examples:
      | username | password | pageTitle         |
      | Tester1  | Test@123 | Accounts Overview |

  