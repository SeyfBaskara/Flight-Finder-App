import React, { useState } from 'react'
import DateSelection from './DateSelection'

interface UserInputState {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
}

const Form = () => {
   const [userInput, setUserInput] = useState<UserInputState>({
      departure: '',
      arrival: '',
      adult: 0,
      child: 0,
      typeOfTrip: 'oneway',
   })

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log(userInput)
   }

   const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
      const { name, value }: any = e.target
      setUserInput({ ...userInput, [name]: value })
   }

   const handleOnClick = (e: any): any => {
      setUserInput({ ...userInput, typeOfTrip: e.target.value })
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
               <label className="flex flex-col text-md font-semibold " htmlFor="departure">
                  From
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     name="departure"
                     value={userInput.departure}
                     onChange={handleOnChange}
                     required
                  />
               </label>
               <label className="flex flex-col text-md font-semibold" htmlFor="arrival">
                  To
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     name="arrival"
                     value={userInput.arrival}
                     onChange={handleOnChange}
                     required
                  />
               </label>

               <div>
                  <DateSelection />
               </div>
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
