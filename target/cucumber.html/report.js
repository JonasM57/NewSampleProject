$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Account.feature");
formatter.feature({
  "name": "Application Login to Account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login to Web Application - Account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsLogin.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"UserName\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsLogin.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"Password\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepsLogin.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login to then Web Application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsLogin.user_should_be_able_to_login_to_then_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cards are displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepsLogin.cards_are_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Login.feature");
formatter.feature({
  "name": "Application Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login to Web Application",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke1"
    }
  ]
});
formatter.step({
  "name": "User is on landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepsLogin.user_is_on_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"User1Name\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepsLogin.user_enters_username_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters password \"Passw1ord\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepsLogin.user_enters_password_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to login to then Web Application",
  "keyword": "Then "
});
formatter.match({
  "location": "stepsLogin.user_should_be_able_to_login_to_then_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cards are not displayed",
  "keyword": "And "
});
formatter.match({
  "location": "stepsLogin.cardsAreNotDisplayed()"
});
formatter.result({
  "status": "passed"
});
});