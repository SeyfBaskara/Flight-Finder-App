import { useForm, SubmitHandler } from 'react-hook-form'
import { useSearchFlightContext } from '../../context/SearchFlightContext'

type FormValues = {
   firstName: string
   lastName: string
   email: string
   phone: number
}

const CheckoutForm = (): JSX.Element => {
   const { register, handleSubmit, reset } = useForm<FormValues>()
   const { setApprovedFlight, bookFlightCart } = useSearchFlightContext()
   const { oneWayTrip }: any = bookFlightCart

   const onSubmit: SubmitHandler<FormValues> = (data) => {
      const { firstName, lastName, email, phone } = data
      const bookFlight = {
         flight_id: oneWayTrip?.fligth_id,
         passengers: {
            firstName,
            lastName,
            email,
            phone,
         },
      }
      setApprovedFlight(true, bookFlight)
      reset()
   }

   return (
      <>
         {oneWayTrip && (
            <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center">
               <div className="my-6">
                  <h1 className="text-lg text-skyGreen font-semibold tracking-wider mb-3">PASSENGER INFORMATION</h1>

                  <div className="flex flex-col gap-4">
                     <div className="flex gap-3">
                        <label className="flex flex-col gap-2 text-md font-semibold text-gray-500" htmlFor="firstName">
                           First Name
                           <input
                              className="border-2 rounded-lg py-3 px-5 text-[1.1rem] font-normal"
                              type="text"
                              {...register('firstName', { required: true })}
                           />
                        </label>
                        <label className="flex flex-col gap-2 text-md font-semibold text-gray-500" htmlFor="lastName">
                           Last Name
                           <input
                              className="border-2 rounded-lg py-3 px-5  text-[1.1rem] font-normal"
                              type="text"
                              {...register('lastName', { required: true })}
                           />
                        </label>
                     </div>
                     <label className="flex flex-col gap-2 text-md font-semibold text-gray-500" htmlFor="email">
                        Email Address
                        <input
                           className="border-2 rounded-lg py-3 px-5 text-[1.1rem] font-normal"
                           type="email"
                           {...register('email', {
                              required: true,
                           })}
                        />
                     </label>

                     <label className="flex flex-col gap-2 text-md font-semibold text-gray-500" htmlFor="phone">
                        Phone Number
                        <input
                           className="border-2 rounded-lg py-3 px-5 text-[1.1rem] font-normal"
                           type="tel"
                           {...register('phone', { required: true })}
                        />
                     </label>
                     <input
                        className="text-lg tracking-widest w-2/5 py-2 px-10 font-bold text-white bg-skyGreen cursor-pointer"
                        type="submit"
                        value="Continue"
                     />
                  </div>
               </div>
            </form>
         )}
      </>
   )
}

export default CheckoutForm

/**
 * TODO
 * form should adapt number of passenger - it display only for one passenger
 */
