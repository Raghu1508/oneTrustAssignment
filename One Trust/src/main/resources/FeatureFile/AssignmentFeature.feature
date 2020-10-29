Feature: Booking Trip on ClearTrip


	Scenario: Book a return trip on cleartrip
	Given Launch a browser and navigate to Clear Trip 
	And Search two return tickets after two weeks 
	When Select Returning Flights
	Then  Verify the Bangalore to Delhi flight Booking
	

	Scenario: Gifting a book
	Given Launch a browser and navigate to Amazon
	When Search a product and click on Buy Now
	Then Verify the SignIn Page