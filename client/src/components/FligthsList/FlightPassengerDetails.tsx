import { useSearchFlightContext } from '../../context/SearchFlightContext'

interface IProps {
   flight: IFlightItinerarie
   passengers: IPassengers
}

const FlightPassengerDetails = ({ flight, passengers }: IProps) => {
   const { getFlightPrice } = useSearchFlightContext()
   const { adult: adultPrice, child: childPrice, currency } = getFlightPrice(flight)
   const totalPrice = passengers.adult * adultPrice + passengers.child * childPrice

   return (
      <div className="flex items-center justify-between">
         <div className="p-5 flex items-center gap-10">
            <div className="flex flex-col items-center gap-2">
               <p className="text-gray-500">Passengers</p>
               <p className="flex gap-2 text-gray-500">
                  Adult:
                  <span className="font-semibold text-gray-700"> {passengers.adult}</span>
                  Child:
                  <span className="font-semibold text-gray-700"> {passengers.child}</span>
               </p>
            </div>
            <p className="flex flex-col items-center gap-2 text-gray-500">
               Adult
               <span className="font-semibold text-gray-700">
                  {adultPrice} {currency}
               </span>
            </p>
            <p className="flex flex-col items-center gap-2 text-gray-500">
               Children
               <span className="font-semibold text-gray-700">
                  {childPrice} {currency}
               </span>
            </p>
         </div>
         <div className="flex flex-col items-center border-l-2 gap-1 p-5">
            <p className="text-gray-500">Total Price</p>
            <p className="text-lg font-semibold text-gray-700">
               {totalPrice}
               <span className="pl-1">{currency}</span>
            </p>
         </div>
      </div>
   )
}

export default FlightPassengerDetails
