import { readData } from '../database/data.js'

export const getOneWayTrip = async (departure, arrival, adult, child, departureDate) => {
   const totalPessanger = adult + child || 1

   const data = await readData()

   const trip = data.filter((flight) => {
      if (
         flight.depatureDestination.toLowerCase() === departure &&
         flight.arrivalDestination.toLowerCase() === arrival
      ) {
         return flight
      }
   })

   if (trip.length !== 0) {
      return {
         flight_id: trip[0].flight_id,
         depatureDestination: trip[0].depatureDestination,
         arrivalDestination: trip[0].arrivalDestination,
         itineraries: trip[0].itineraries.filter((board) => board.avaliableSeats >= totalPessanger),
         passengers: { adult, child },
      }
   }
}

export const getReturnTrip = async (departure, arrival, adult, child, returnDate) => {
   const totalPessanger = adult + child
   const departureDest = arrival
   const arrivalDest = departure

   const data = await readData()

   const trip = data.filter((flight) => {
      if (
         flight.depatureDestination.toLowerCase() === departureDest &&
         flight.arrivalDestination.toLowerCase() === arrivalDest
      ) {
         return flight
      }
   })

   if (trip.length !== 0) {
      return {
         flight_id: trip[0]?.flight_id,
         depatureDestination: trip[0]?.depatureDestination,
         arrivalDestination: trip[0]?.arrivalDestination,
         itineraries: trip[0]?.itineraries.filter((board) => board.avaliableSeats >= totalPessanger),
         passengers: { adult, child },
      }
   }
}
