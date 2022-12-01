import React from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'
import Flight from './Flight'
import Spinner from '../Spinner'

const Flights = () => {
   const { flights, isLoading } = useSearchFlightContext()
   const { oneWayTrip, returnTrip } = flights
   const isReturnTrip = returnTrip?.depatureDestination !== undefined

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
                  <div className={`${isReturnTrip ? 'flex justify-center gap-5' : 'ml-28 '} `}>
                     <ul className="flex flex-col gap-5 ">
                        <p className="text-2xl text-gray-500 font-semibold">Departure</p>
                        {oneWayTrip.itineraries.map((item, index) => (
                           <li key={index}>
                              <Flight
                                 depatureDest={oneWayTrip.depatureDestination}
                                 arrivalDest={oneWayTrip.arrivalDestination}
                                 flightID={oneWayTrip.flight_id}
                                 index={index}
                                 roundTrip={isReturnTrip}
                                 flight={item}
                              />
                           </li>
                        ))}
                     </ul>
                     {isReturnTrip && (
                        <ul className="flex flex-col gap-5 ">
                           <p className="text-2xl text-gray-500 font-semibold">Return</p>
                           {returnTrip?.itineraries?.map((item, index) => (
                              <li key={index}>
                                 <Flight
                                    depatureDest={returnTrip?.depatureDestination}
                                    arrivalDest={returnTrip?.arrivalDestination}
                                    flightID={returnTrip?.flight_id}
                                    roundTrip={isReturnTrip}
                                    index={index}
                                    flight={item}
                                 />
                              </li>
                           ))}
                        </ul>
                     )}
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default Flights
