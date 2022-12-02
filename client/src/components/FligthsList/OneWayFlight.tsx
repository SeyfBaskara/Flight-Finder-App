import Flight from './Flight'

interface IProps {
   oneWayTrip: IFlightDetails
   roundTrip?: boolean
   message?: string
}

const OneWayFlight = ({ oneWayTrip, roundTrip = false, message = '' }: IProps): JSX.Element => {
   return (
      <>
         <ul className="flex flex-col gap-5 ">
            {message === 'booked' ? (
               <p className="text-2xl text-gray-500 font-semibold">Booked departure flight</p>
            ) : (
               <p className="text-2xl text-gray-500 font-semibold">Departure</p>
            )}
            {oneWayTrip.itineraries.map((item, index) => (
               <li key={index}>
                  <Flight
                     depatureDestination={oneWayTrip.depatureDestination}
                     arrivalDestination={oneWayTrip.arrivalDestination}
                     flightID={oneWayTrip.flight_id}
                     passengers={oneWayTrip.passengers}
                     index={index}
                     roundTrip={roundTrip}
                     flight={item}
                     message={message}
                  />
               </li>
            ))}
         </ul>
      </>
   )
}

export default OneWayFlight
