# PGP - test - Flight finder app 

## Requirements:

Your app should include all (required) and at least one (optional). You are also encouraged to go beyond these requirements, if you come up with more features that will add value to your app just add them as well!

-  (required) A search bar

   -  (required) A proper search must include:
   -  Departure destination and arrival destination✅
   -  One way trip or round trip✅
   -  Departure date, and possible Return date (Feel free to use libraries like react-datepicker here)✅
   -  How many passengers; adults (12+) and/or children✅

-  (required) A display list of flights after search.✅

-  (required) The list should include cards with flight information displayed. If a round trip is selected it should either show a card for each possible flight combination (back and forth), or let the user first select a departure flight and then select a return flight (possible inspiration for this could be https://www.norwegian.com/).✅

-  (required) Each card should display; the destinations together with time of departure & arrival, duration of flight and price for adults✅
-  (required) Users should be able to click on a card and get information on available seats and the price for both adults and children, and also be displayed with the “book” button. This could show by expanding the card size, but exactly how is up to you✅
-  (required) The “book” button; clicking on it should redirect to a new URL for booking the specific flight✅🔴 (redirect implemented only on oneWayTrip yet)

-  (required) In the booking the user should be able to put in their information for each passenger 🔴 (form avaiable only for a single passenger)
-  (required) Before booking is completed the user should be displayed again all info on flight (time, total price for all passengers) and the passenger info they gave, so they can give a final approval. Then a final “book” button, clicking it should tell the user the booking was successful✅
-  (required) For each booking the available seats should be updated in your backend 🔴 (not implemented yet)
-  (required) On search, when fetching the list of flights, your backend should have a timeout of 3 seconds
   ◦ (required) While waiting the UI should show loading here✅

## Optionals:

-  (optional) When the booking is done an email should be sent with confirmation to the email given in the booking
-  (optional) The user should be able to sort based on price, duration and departure time
-  (optional) For the location search inputs have a dropdown of the possible destinations. And as the user writes, filter out destinations.
-  (optional) Have a button that changes the theme of the page from light to dark
-  (optional) Have flights with layovers. You should then connect existing flights with each other, if a direct flight doesn't exist. For example; someone searches for Stockholm to Amsterdam. You don’t have any direct flight in your db for this, but you do have flights for Stockholm -> Oslo and Oslo -> Amsterdam. Then combine these two and present them as one card, showing time for each flight and wait time between flights. 
   • (optional) Set a price-range in your search
   • (optional) Use the provided JSON to seed a database of your choice, and work against that instead
   • (optional) Save each booking in a database, so the user can review their booking again. Either via a login or a booking code.
