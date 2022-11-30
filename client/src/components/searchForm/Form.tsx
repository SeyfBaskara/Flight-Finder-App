import React, { useState } from 'react'
import ReactDatePicker from './ReactDatePicker'
import Travellers from './Travellers'

interface UserInputState {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
}

const Form = () => {
   const [user, setUser] = useState<UserInputState>({
      departure: '',
      arrival: '',
      adult: 1,
      child: 0,
      typeOfTrip: 'oneway',
   })

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(user)
   }

   const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
      const { name, value }: any = e.target
      setUser({ ...user, [name]: value })
   }

   const handleOnClick = (e: any): any => {
      setUser({ ...user, typeOfTrip: e.target.value })
   }

   return (
      <form onSubmit={handleSubmit} className="flex justify-center">
         <div className="flex flex-col gap-2">
            <div className="flex gap-5">
               <label className="flex gap-2 text-md font-semibold " htmlFor="typeOfTrip">
                  <input
                     type="radio"
                     value="oneway"
                     defaultChecked
                     name="typeOfTrip"
                     onClick={(e) => handleOnClick(e)}
                  />
                  One Way
               </label>
               <label className="flex gap-2 text-md font-semibold " htmlFor="typeOfTrip">
                  <input type="radio" value="return" name="typeOfTrip" onClick={(e) => handleOnClick(e)} />
                  Return
               </label>
            </div>
            <div className="flex">
               <label className="flex flex-col text-md " htmlFor="departure">
                  From
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     name="departure"
                     value={user.departure}
                     onChange={handleOnChange}
                     required
                  />
               </label>
               <label className="flex flex-col text-md" htmlFor="arrival">
                  To
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     name="arrival"
                     value={user.arrival}
                     onChange={handleOnChange}
                     required
                  />
               </label>

               <ReactDatePicker />
               <Travellers user={user} setUser={setUser} />
            </div>
            <input
               className="text-lg tracking-widest w-1/4 py-2 px-10 font-bold text-white bg-skyGreen cursor-pointer"
               type="submit"
               value="Search flights"
            />
         </div>
      </form>
   )
}

export default Form
