import React from 'react'
import Flight from './Flight'

interface IProps {
   oneWayTrip: FlightDetails
   roundTrip?: boolean
   message?: string
}

const OneWayFlight = ({ oneWayTrip, roundTrip = false, message = '' }: IProps): JSX.Element => {
   return (
      <>
         <ul className="flex flex-col gap-5 ">
            {message === 'booked' ? (
               <p className="text-2xl text-gray-500 font-semibold">Booked depature flight</p>
            ) : (
               <p className="text-2xl text-gray-500 font-semibold">Departure</p>
            )}
            {oneWayTrip.itineraries.map((item, index) => (
               <li key={index}>
                  <Flight
                     depatureDestination={oneWayTrip.depatureDestination}
                     arrivalDestination={oneWayTrip.arrivalDestination}
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
