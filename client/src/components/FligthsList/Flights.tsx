import React from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'
import Flight from './Flight'
import Spinner from '../Spinner'

const Flights = () => {
   const { flights, isLoading } = useSearchFlightContext()
   const {
      oneWayTrip: { depatureDestination, arrivalDestination, itineraries },
   } = flights
   return (
      <div className="mt-4">
         {isLoading ? (
            <div className="flex items-center justify-center gap-3">
               <Spinner />
               <p className="text-2xl font-semibold text-gray-400">Searching for flights...</p>
            </div>
         ) : (
            <>
               {flights.message !== 'success' ? (
                  <p className="text-2xl font-semibold text-gray-500 text-center">{flights.message}</p>
               ) : (
                  <ul className="flex flex-col gap-5">
                     {itineraries.map((item, index) => (
                        <li key={index}>
                           <Flight depatureDest={depatureDestination} arrivalDest={arrivalDestination} flight={item} />
                        </li>
                     ))}
                  </ul>
               )}
            </>
         )}
      </div>
   )
}

export default Flights
