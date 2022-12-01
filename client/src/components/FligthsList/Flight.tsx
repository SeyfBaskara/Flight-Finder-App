import React from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'

interface IProps {
   depatureDest: string
   arrivalDest: string
   flight: FlightItinerarie
}

const Flight = ({ depatureDest, arrivalDest, flight }: IProps) => {
   const { getDestinationHours, getFlightPrice } = useSearchFlightContext()
   const { depatureAt, arriveAt, totalHour } = getDestinationHours(flight)
   const { adult, currency } = getFlightPrice(flight)

   return (
      <section className="flex gap-5 border-2 rounded-md shadow-sm w-2/5 ">
         <div className="flex gap-8 p-5 items-center">
            <div className="flex flex-col gap-1">
               <p className="text-2xl font-semibold text-gray-500">{depatureAt}</p>
               <p className="text-gray-500">{depatureDest}</p>
            </div>
            <div className="flex flex-col gap-1">
               <p className="text-sm">{totalHour}</p>
               <hr></hr>
               <p className="text-sm text-skyGreen">Direct</p>
            </div>
            <div className="flex flex-col gap-1">
               <p className="text-2xl font-semibold text-gray-500">{arriveAt}</p>
               <p className="text-gray-500">{arrivalDest}</p>
            </div>
         </div>
         <div className="flex flex-col items-center border-l-2 gap-1 p-5">
            <p className="text-lg font-semibold text-gray-700">
               {adult}
               <span className="pl-1">{currency}</span>
            </p>
            <button className="tracking-widest rounded-md w-28 font-bold p-2 text-white bg-skyGreen cursor-pointer">
               Select
            </button>
         </div>
      </section>
   )
}

export default Flight
