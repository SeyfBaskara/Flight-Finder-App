interface IUserInputState {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
   departureDate: Date | null
   returnDate: Date | null
}

interface IFlightData {
   oneWayTrip: IFlightDetails
   returnTrip?: IFlightDetails
   message: string
}

interface IFlightDetails {
   arrivalDestination: string
   depatureDestination: string
   flight_id: string
   itineraries: IFlightItinerarie[]
   passengers: Passengers
}

interface IFlightItinerarie {
   arriveAt: string
   avaliableSeats: number
   depatureAt: string
   prices: IFlightPrice[]
}

interface IFlightPrice {
   adult: number
   child: number
   currency: string
}
interface IPassengers {
   adult: number
   child: number
}
