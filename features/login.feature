Feature: Vueling Login
    As a user, I want to be able to log in successfully

    Scenario Outline: Login with user credentials
        Given the user is on the Vueling login page
        When the user enters username "<username>" and password "<password>"
        Then the login should be "<result>"

        Examples:
            | username  | password  | result       |
            | validUser | validPass | successful   |
            | validUser | wrongPass | unsuccessful |
            | wrongUser | validPass | unsuccessful |
