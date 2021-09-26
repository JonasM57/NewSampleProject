Feature: Application Login

  Scenario: Login to Web Application
    Given User is on landing page
    When User enters username "UserName"
    And User enters password "Password"
    Then User should be able to login to then Web Application
    And cards are displayed

  @smoke1
  Scenario: Login to Web Application
    Given User is on landing page
    When User enters username "User1Name"
    And User enters password "Passw1ord"
    Then User should be able to login to then Web Application
    And cards are not displayed


  Scenario: Login to Web Application
    Given User is on landing page
    When User signs in with following details
   | Name | Age | Location | Sex |
    Then User should be able to login to then Web Application
    And cards are not displayed


  Scenario Outline: Login to Web Application
    Given User is on landing page
    When User enters username2 <UName>
    And User enters password2 <Pwd>
    Then User should be able to login to then Web Application
    And cards are not displayed

     Examples:
      |UName|Pwd|
      |Fname|123|
      |Uname|234|
