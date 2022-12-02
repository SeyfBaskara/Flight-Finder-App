import { useSearchFlightContext } from '../../context/SearchFlightContext'
import OneWayFlight from '../FligthsList/OneWayFlight'

const BookedFlights = (): JSX.Element => {
   const { bookFlightCart } = useSearchFlightContext()
   const { oneWayTrip, message }: any = bookFlightCart

   return (
      <div className="flex justify-center mb-10 ">
         {oneWayTrip ? (
            <>
               <OneWayFlight oneWayTrip={oneWayTrip} message={message} />
            </>
         ) : (
            <p className="text-2xl font-semibold text-gray-500">There is no booked flight</p>
         )}
      </div>
   )
}

export default BookedFlights
