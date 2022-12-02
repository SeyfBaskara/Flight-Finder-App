import { useSearchFlightContext } from '../../context/SearchFlightContext'
import Spinner from '../Spinner'

import OneWayFlight from './OneWayFlight'
import ReturnFlight from './ReturnTrip'

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
                     <OneWayFlight oneWayTrip={oneWayTrip} roundTrip={isReturnTrip} />

                     {isReturnTrip && <ReturnFlight returnTrip={returnTrip} roundTrip={isReturnTrip} />}
                  </div>
               )}
            </>
         )}
      </div>
   )
}

export default Flights
