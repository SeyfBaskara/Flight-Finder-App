import { readData } from '../database/data.js'

export const getOneWayTrip = async (departure, arrival, adult, child) => {
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
      const itineraries = trip[0].itineraries.filter((board) => board.avaliableSeats >= totalPessanger)
      const tripData = {
         flight_id: trip[0].flight_id,
         depatureDestination: trip[0].depatureDestination,
         arrivalDestination: trip[0].arrivalDestination,
         itineraries,
      }

      return tripData
   }
}

// console.log(await getOneWayTrip('stockholm', 'lund', 1, 0))
export const getReturnTrip = async (departure, arrival, adult, child) => {
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
      const itineraries = trip[0]?.itineraries.filter((board) => board.avaliableSeats >= totalPessanger)
      const tripData = {
         flight_id: trip[0]?.flight_id,
         depatureDestination: trip[0]?.depatureDestination,
         arrivalDestination: trip[0]?.arrivalDestination,
         itineraries,
      }

      return tripData
   }
}
