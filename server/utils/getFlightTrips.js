import { readData } from '../database/data.js'

export const getOneWayTrip = async (departure, arrival, adult, child) => {
   const totalPessanger = adult + child || 1

   const data = await readData()

   const trip = data.filter((flight) => {
      if (flight.depatureDestination === departure && flight.arrivalDestination === arrival) {
         return flight
      }
   })

   const itineraries = trip[0].itineraries.filter((board) => board.avaliableSeats >= totalPessanger)
   const tripData = {
      flight_id: trip[0].flight_id,
      depatureDestination: trip[0].depatureDestination,
      arrivalDestination: trip[0].arrivalDestination,
      itineraries,
   }

   return tripData
}

export const getReturnTrip = async (departure, arrival, adult, child) => {
   const totalPessanger = adult + child
   const departureDest = arrival
   const arrivalDest = departure

   const data = await readData()

   const trip = data.filter((flight) => {
      if (flight.depatureDestination === departureDest && flight.arrivalDestination === arrivalDest) {
         return flight
      }
   })

   const itineraries = trip[0].itineraries.filter((board) => board.avaliableSeats >= totalPessanger)
   const tripData = {
      flight_id: trip[0].flight_id,
      depatureDestination: trip[0].depatureDestination,
      arrivalDestination: trip[0].arrivalDestination,
      itineraries,
   }

   return tripData
}
