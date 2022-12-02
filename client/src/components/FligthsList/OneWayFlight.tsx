import React from 'react'
import Flight from './Flight'

interface IProps {
   oneWayTrip: FlightDetails
   roundTrip: boolean
}

const OneWayFlight = ({ oneWayTrip, roundTrip }: IProps): JSX.Element => {
   return (
      <>
         <ul className="flex flex-col gap-5 ">
            <p className="text-2xl text-gray-500 font-semibold">Departure</p>
            {oneWayTrip.itineraries.map((item, index) => (
               <li key={index}>
                  <Flight
                     depatureDest={oneWayTrip.depatureDestination}
                     arrivalDest={oneWayTrip.arrivalDestination}
                     flightID={oneWayTrip.flight_id}
                     index={index}
                     roundTrip={roundTrip}
                     flight={item}
                  />
               </li>
            ))}
         </ul>
      </>
   )
}

export default OneWayFlight
