package stepDefination;

import static org.junit.Assert.assertEquals;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class Assignments {

	static WebDriver driver;
	String fromPlace = "Bangalore";
	String toPlace = "New Delhi";
	
	String verificationText = "Review your flight details";
	
	String bookName = "A Brief History of Everyone Who Ever Lived";
	String loginButtonVerification = "Login";

	
	//First Scenario : Santosh Booking a return trip from Bangalore to Delhi
	
	@Given("Launch a browser and navigate to Clear Trip")
	public void launch_browser() {
		ChromeOptions ops = new ChromeOptions();
        ops.addArguments("--disable-notifications");
       
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver(ops);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.cleartrip.com");
	}
	
	@Given("Search two return tickets after two weeks")
	public void searchReturnTickets() throws InterruptedException
	{
		WebDriverWait wait = new WebDriverWait(driver,30);
		WebElement roundTrip = wait.until(ExpectedConditions.elementToBeClickable(By.id("RoundTrip")));
		roundTrip.click();
		
		//Selecting To and From City
		
		driver.findElement(By.id("FromTag")).sendKeys(fromPlace);
		Thread.sleep(5000);
		driver.findElement(By.id("FromTag")).sendKeys(Keys.ENTER);
		
		driver.findElement(By.id("ToTag")).sendKeys(toPlace);
		Thread.sleep(5000);
		
		driver.findElement(By.id("ToTag")).sendKeys(Keys.ENTER);
		
		
		//Selecting a departure date after 15 days
		driver.findElement(By.id("DepartDate")).sendKeys(getDate(15));
		driver.findElement(By.id("ReturnDate")).sendKeys(getDate(16));
				
			
		//Selecting a value from children drop down
		Select sel = new Select(driver.findElement(By.id("Childrens")));
		sel.selectByValue("1");
		driver.findElement(By.xpath("//div[@class='searchForm clearFix']")).click();
		
		driver.findElement(By.id("SearchBtn")).click();
		
	}
	
	@When("Select Returning Flights")
	public void selectReturningFlight()
	{
		WebDriverWait wait = new WebDriverWait(driver,40);
		WebElement departure = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//Span[contains(text(),'Departure')])[2]")));
		departure.click();
		//Selecting the radio button for Non Stop Flights
		driver.findElement(By.xpath("//p[contains(text(),'Non-stop')]/../../../../../div/label/div[1]")).click();
		departure.click();
		
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.cssSelector(".radio__light")).click();
		
		driver.findElement(By.cssSelector(".bg-orange")).click();
	}
	
	@Then("Verify the Bangalore to Delhi flight Booking")
	public void verifyBooking()
	{
		//Fethcing the Window Handles to navigate to New Tab
	 	
			
		
		
		
	    ArrayList<String> tabs2 = new ArrayList<String> (driver.getWindowHandles());
	    driver.switchTo().window(tabs2.get(1));
	    
	    //Verify the Text for reviewing flight details 
		WebDriverWait wait = new WebDriverWait(driver,20);
	    wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//p[contains(text(), '" + verificationText + "')]")));
	    String actualReviewText =  driver.findElement(By.xpath("//p[contains(text(), '" + verificationText + "')]")).getText();
	    
	    assertEquals(verificationText,actualReviewText);
	    
	    driver.quit();
		
	}
	
	//A Method to generate a future date. It takes the input as 'Number of dates in future'
	public String getDate(int extraDate)
	{
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Calendar c = Calendar.getInstance();
		c.setTime(new Date()); 
		c.add(Calendar.DATE, extraDate); 
		String finalDate = sdf.format(c.getTime());
		
		return finalDate;
		
	}
	

	
	//Second Scenario i.e, Santosh buying a book for Sandhya
	
	
	@Given("Launch a browser and navigate to Amazon")
	public void launchAmazon()
	{
		ChromeOptions ops = new ChromeOptions();
        ops.addArguments("--disable-notifications");
        
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver(ops);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.amazon.in");
	}
	
	@When("Search a product and click on Buy Now")
	public void searchAProduct()
	{
		
	    //Searching for the product 
		WebDriverWait wait = new WebDriverWait(driver,40);
		WebElement searchBox = wait.until(ExpectedConditions.elementToBeClickable(By.id("twotabsearchtextbox")));
		
		searchBox.sendKeys(bookName);
		
		driver.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
		
		
		WebElement searchButton = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("(//span[contains(text(),'A Brief History of Everyone Who Ever Lived')])[2]")));
		
		searchButton.click();
		
		//Navigating to the next tab in which the list of products are displayed 
		ArrayList<String> tabs2 = new ArrayList<String> (driver.getWindowHandles());
	    driver.switchTo().window(tabs2.get(1));
		
		WebElement paperBackLink = wait.until(ExpectedConditions.elementToBeClickable(By.id("a-autoid-6")));
		
		paperBackLink.click();
		
		driver.findElement(By.id("buy-now-button")).click();
		
		
		
	}
	
	@Then("Verify the SignIn Page")
	public void verifyLogin()
	{
		
		//Verifying the sign in page when clicked on Buy Now button
		String expectedText = driver.findElement(By.xpath("//h1[contains(text(),'"+ loginButtonVerification +"')]")).getText();
		
		assertEquals(expectedText, loginButtonVerification);
		
		driver.quit();
		
	}
	

}
