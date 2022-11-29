import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
}

const Form = () => {
   const { register, handleSubmit } = useForm<FormValues>()

   const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
         <div className="flex flex-col gap-2">
            <div className="flex gap-5">
               <label className="flex gap-2 text-md font-semibold " htmlFor="typeOfTrip">
                  <input type="radio" value="oneway" checked={true} {...register('typeOfTrip', { required: true })} />
                  One Way
               </label>
               <label className="flex gap-2 text-md font-semibold " htmlFor="typeOfTrip">
                  <input type="radio" value="return" {...register('typeOfTrip', { required: true })} />
                  Return
               </label>
            </div>
            <div className="flex">
               <label className="flex flex-col text-md font-semibold " htmlFor="departure">
                  From
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     {...register('departure', { required: true })}
                  />
               </label>
               <label className="flex flex-col text-md font-semibold " htmlFor="arrival">
                  To
                  <input
                     className="border-2 rounded-sm py-3 px-5 text-md font-normal"
                     type="text"
                     {...register('arrival', { required: true })}
                  />
               </label>
            </div>
            <input
               className="text-lg tracking-widest w-2/4 py-2 px-10 font-bold text-white bg-skyGreen cursor-pointer"
               type="submit"
               value="Search flights"
            />
         </div>
      </form>
   )
}

export default Form
