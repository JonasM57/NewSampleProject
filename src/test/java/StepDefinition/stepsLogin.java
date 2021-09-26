package StepDefinition;

import com.sun.xml.internal.bind.v2.runtime.output.StAXExStreamWriterOutput;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.sql.SQLOutput;
import java.util.List;

public class stepsLogin {

    @Given("User is on landing page")
    public void user_is_on_landing_page() {
        System.out.println("Welcome to the new world of Cucumber");
    }
    @When("^User enters username \"([^\"]*)\"$")
    public void user_enters_username_something(String strArg1) {
        System.out.println(strArg1);
    }
    @When("^User enters password \"([^\"]*)\"$")
    public void user_enters_password_something(String strArg2) {
        System.out.println(strArg2);
    }
    @Then("User should be able to login to then Web Application")
    public void user_should_be_able_to_login_to_then_web_application() {
        System.out.println("Then method");
    }
    @Then("cards are displayed")
    public void cards_are_displayed() {
        System.out.println("Then method");
    }

    @And("cards are not displayed")
    public void cardsAreNotDisplayed() {
    }

    @When("^User signs in with following details$")
    public void user_signs_in_with_following_details(DataTable data) {
        List<List<String>> obj = data.asLists();
        System.out.println(obj.get(0).get(0));
        System.out.println(obj.get(0).get(1));
        System.out.println(obj.get(0).get(2));
        System.out.println(obj.get(0).get(3));
    }
    @When("^User enters username2 (.+)$")
    public void user_enters_username1(String uname) {
        System.out.println(uname);
    }

    @And("^User enters password2 (.+)$")
    public void user_enters_password1(String pwd) {
        System.out.println(pwd);
    }
}
