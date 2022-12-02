import React, { Dispatch, SetStateAction } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface IProps {
   user: IUserInputState
   setUser: Dispatch<SetStateAction<IUserInputState>>
}

const ReactDatePicker = ({ user, setUser }: IProps): JSX.Element => {
   return (
      <div className="flex">
         <label className="flex flex-col text-md">
            Depart
            <DatePicker
               className="border-2 rounded-sm py-3 px-5 text-md font-normal"
               selected={user.departureDate}
               onChange={(date: Date) => setUser({ ...user, departureDate: date })}
               placeholderText="Select date"
               required
            />
         </label>
         <label className="flex flex-col text-md">
            Return
            <DatePicker
               className="border-2 rounded-sm py-3 px-5 text-md font-normal"
               selected={user.returnDate}
               onChange={(date: Date) => setUser({ ...user, returnDate: date })}
               placeholderText="Select date"
               disabled={user.typeOfTrip === 'oneway' && true}
               required
            />
         </label>
      </div>
   )
}

export default ReactDatePicker
