package cucumberOptions;



import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/Features",
        tags = {"@Reg , @smoke1"},
        glue = "StepDefinition",
        plugin = {"pretty","html:target/cucumber"})

public class TestRunner {
}
