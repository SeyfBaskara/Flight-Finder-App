import BookedFlights from '../components/BookedFlights/BookedFlights'
import CheckoutForm from '../components/Checkout/CheckoutForm'
import SuccessMsgModal from '../components/Checkout/SuccessMsgModal'
import { useSearchFlightContext } from '../context/SearchFlightContext'

const Booking = (): JSX.Element => {
   const { hasApprovedFlight } = useSearchFlightContext()

   return (
      <>
         {hasApprovedFlight ? (
            <SuccessMsgModal />
         ) : (
            <>
               <BookedFlights />
               <CheckoutForm />
            </>
         )}
      </>
   )
}
export default Booking
