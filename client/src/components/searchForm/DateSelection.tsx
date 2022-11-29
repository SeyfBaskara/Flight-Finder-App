import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const DateSelection = () => {
   const [startDate, setStartDate] = useState<Date | null>(null)
   const [endDate, setEndDate] = useState<Date | null>(null)

   return (
      <div className="flex">
         <label className="flex flex-col text-md font-semibold">
            Depart
            <DatePicker
               className="border-2 rounded-sm py-3 px-5 text-md font-normal"
               selected={startDate}
               onChange={(date: Date) => setStartDate(date)}
               placeholderText="Select date"
            />
         </label>
         <label className="flex flex-col text-md font-semibold">
            Return
            <DatePicker
               className="border-2 rounded-sm py-3 px-5 text-md font-normal"
               selected={endDate}
               onChange={(date: Date) => setEndDate(date)}
               placeholderText="Select date"
            />
         </label>
      </div>
   )
}

export default DateSelection
