package testRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/main/resources/FeatureFile",
glue = "stepDefination",
plugin = {"html:Reports/cucumber-html-report"},
strict = true
		)





public class Runner {

}
