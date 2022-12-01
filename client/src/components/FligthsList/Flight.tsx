import React, { useState } from 'react'
import { useSearchFlightContext } from '../../context/SearchFlightContext'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material'

interface IProps {
   depatureDest: string
   arrivalDest: string
   flight: FlightItinerarie
}

const Flight = ({ depatureDest, arrivalDest, flight }: IProps) => {
   const { getDestinationHours, getFlightPrice } = useSearchFlightContext()
   const { depatureAt, arriveAt, totalHour } = getDestinationHours(flight)
   const { adult, child, currency } = getFlightPrice(flight)

   const [hasExpand, setHasExpand] = useState<boolean>(false)

   return (
      <section className="border-2 rounded-md shadow-sm w-2/5">
         <div className="flex p-5 items-center justify-between border-b-2">
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
            {!hasExpand ? (
               <KeyboardArrowDown onClick={() => setHasExpand(true)} className="cursor-pointer" />
            ) : (
               <KeyboardArrowUp onClick={() => setHasExpand(false)} className="cursor-pointer" />
            )}
         </div>
         {hasExpand && (
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
                  <button className="tracking-widest rounded-md w-28 font-bold p-2 text-white bg-skyGreen cursor-pointer">
                     Select
                  </button>
               </div>
            </div>
         )}
      </section>
   )
}

export default Flight
