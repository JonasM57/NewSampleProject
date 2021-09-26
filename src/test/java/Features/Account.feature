Feature: Application Login to Account

  @Reg
  Scenario: Login to Web Application - Account
    Given User is on landing page
    When User enters username "UserName"
    And User enters password "Password"
    Then User should be able to login to then Web Application
    And cards are displayed