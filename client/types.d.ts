interface UserInputState {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
   departureDate: Date | null
   returnDate: Date | null
}

interface FlightData {
   oneWayTrip: FlightDetails
   returnTrip?: FlightDetails
   message: string
}

interface FlightDetails {
   arrivalDestination: string
   depatureDestination: string
   flight_id: string
   itineraries: FlightItinerarie[]
}

interface FlightItinerarie {
   arriveAt: string
   avaliableSeats: number
   depatureAt: string
   prices: FlightPrice[]
}

interface FlightPrice {
   adult: number
   child: number
   currency: string
}
