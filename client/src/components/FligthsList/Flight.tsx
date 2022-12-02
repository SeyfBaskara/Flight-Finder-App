import { useState } from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import FlightDetails from './FlightDetails'
import FlightPassengerDetails from './FlightPassengerDetails'

interface IProps {
   depatureDestination: string
   arrivalDestination: string
   flightID: string
   passengers: IPassengers
   index: number
   flight: IFlightItinerarie
   roundTrip?: boolean
   message?: string
}

const Flight = ({
   depatureDestination,
   arrivalDestination,
   flight,
   flightID,
   passengers,
   index,
   roundTrip = false,
   message = '',
}: IProps) => {
   const { getDestinationHours, getBookFlight } = useSearchFlightContext()
   const { depatureAt, arriveAt, totalHour } = getDestinationHours(flight)

   const [isFlightSelected, setIsFlightSelected] = useState<boolean>(false)
   const [selectedIndex, setSelectedIndex] = useState<number>()
   const [hasExpand, setHasExpand] = useState<boolean>(false)

   const navigate = useNavigate()

   const handleSelect = () => {
      if (!roundTrip) {
         getBookFlight({
            oneWayTrip: {
               depatureDestination,
               arrivalDestination,
               flight_id: flightID,
               itineraries: [flight],
               passengers,
            },
            message: 'booked',
         })
         navigate('/booking')
      } else {
         // uncomplete round trip implementation
         setSelectedIndex(index)
         setIsFlightSelected(!isFlightSelected)
      }
   }

   return (
      <section
         className={`border-2 rounded-md shadow-sm w-[32rem] ${
            isFlightSelected && selectedIndex === index && 'border-skyGreen'
         }`}
      >
         <div className="flex p-5 items-center justify-between border-b-2">
            <div className="flex flex-col gap-1">
               <p className="text-2xl font-semibold text-gray-500">{depatureAt}</p>
               <p className="text-gray-500">{depatureDestination}</p>
            </div>
            <div className="flex flex-col gap-1">
               <p className="text-sm">{totalHour}</p>
               <hr></hr>
               <p className="text-sm text-skyGreen">Direct</p>
            </div>
            <div className="flex flex-col gap-1">
               <p className="text-2xl font-semibold text-gray-500">{arriveAt}</p>
               <p className="text-gray-500">{arrivalDestination}</p>
            </div>
            {!hasExpand ? (
               <KeyboardArrowDown onClick={() => setHasExpand(true)} className="cursor-pointer" />
            ) : (
               <KeyboardArrowUp onClick={() => setHasExpand(false)} className="cursor-pointer" />
            )}
         </div>
         {hasExpand && (
            <>
               {message === 'booked' ? (
                  <FlightPassengerDetails flight={flight} passengers={passengers} />
               ) : (
                  <FlightDetails flight={flight} handleSelectFunc={handleSelect} />
               )}
            </>
         )}
      </section>
   )
}

export default Flight
