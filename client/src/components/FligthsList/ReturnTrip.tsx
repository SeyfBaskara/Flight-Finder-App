import React from 'react'
import Flight from './Flight'

interface IProps {
   returnTrip: FlightDetails
   roundTrip: boolean
}

const ReturnFlight = ({ returnTrip, roundTrip }: IProps): JSX.Element => {
   return (
      <>
         <ul className="flex flex-col gap-5 ">
            <p className="text-2xl text-gray-500 font-semibold">Return</p>
            {returnTrip?.itineraries?.map((item, index) => (
               <li key={index}>
                  <Flight
                     depatureDest={returnTrip?.depatureDestination}
                     arrivalDest={returnTrip?.arrivalDestination}
                     flightID={returnTrip?.flight_id}
                     roundTrip={roundTrip}
                     index={index}
                     flight={item}
                  />
               </li>
            ))}
         </ul>
      </>
   )
}

export default ReturnFlight
