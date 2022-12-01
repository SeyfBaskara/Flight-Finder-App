import React from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'
import Flight from './Flight'

const Flights = () => {
   const { flights, isLoading } = useSearchFlightContext()
   const {
      oneWayTrip: { depatureDestination, arrivalDestination, itineraries },
   } = flights
   return (
      <div className="mt-4">
         <ul className="flex flex-col gap-5">
            {itineraries.map((item, index) => (
               <li key={index}>
                  <Flight depatureDest={depatureDestination} arrivalDest={arrivalDestination} flight={item} />
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Flights
