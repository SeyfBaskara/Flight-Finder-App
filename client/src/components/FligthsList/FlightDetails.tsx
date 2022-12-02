import { useSearchFlightContext } from '../../context/SearchFlightContext'

interface IProps {
   flight: IFlightItinerarie
   handleSelectFunc: () => void
}

const FlightDetails = ({ flight, handleSelectFunc }: IProps): JSX.Element => {
   const { getFlightPrice } = useSearchFlightContext()
   const { adult, child, currency } = getFlightPrice(flight)

   return (
      <div className="flex items-center justify-between">
         <div className="p-5 flex items-center gap-5">
            <p className="flex flex-col items-center gap-2 text-gray-500">
               Avaiable Seats <span className="font-semibold text-gray-700">{flight.avaliableSeats}</span>
            </p>
            <p className="flex flex-col items-center gap-2 text-gray-500">
               Adult
               <span className="font-semibold text-gray-700">
                  {adult} {currency}
               </span>
            </p>
            <p className="flex flex-col items-center gap-2 text-gray-500">
               Children
               <span className="font-semibold text-gray-700">
                  {child} {currency}
               </span>
            </p>
         </div>
         <div className="flex flex-col items-center border-l-2 gap-1 p-5">
            <p className="text-lg font-semibold text-gray-700">
               {adult}
               <span className="pl-1">{currency}</span>
            </p>
            <button
               className="tracking-widest rounded-md w-28 font-bold p-2 text-white bg-skyGreen cursor-pointer"
               onClick={handleSelectFunc}
            >
               Select
            </button>
         </div>
      </div>
   )
}

export default FlightDetails
