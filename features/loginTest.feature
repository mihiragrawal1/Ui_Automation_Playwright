Feature: Login 

    Scenario: Validate login with correct username and password
        Given User is on Login page of application
        When User enters "testmihir@gmail.com" and "Test@12345"
        Then User should be taken to application main page

    @validation
    Scenario Outline: Validate login with incorrect username and password
        Given User is on Login page of application
        When User enters "<username>" and "<password>"
        Then User should not be able to login and should get error for invalid credentials

        Examples:
        | username                  | password   |
        | tir@gmail.com             | Test@12    |
        | tiger@gmail.com           | Test@12    |
        | firname@gmail.com         | Test@12    |