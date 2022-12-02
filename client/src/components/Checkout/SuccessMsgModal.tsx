import { useNavigate } from 'react-router-dom'
import { useSearchFlightContext } from '../../context/SearchFlightContext'

const SuccessMsgModal = () => {
   const { setHasApprovedFlight } = useSearchFlightContext()
   const navigate = useNavigate()

   const handleGoBackOnClick = () => {
      navigate('/')
      setHasApprovedFlight(false)
   }
   return (
      <div className="flex flex-col items-center justify-center gap-4">
         <p className="flex flex-col gap-2 text-md font-semibold text-gray-500">
            You have booked a flight succesfully! ✅
         </p>
         <button
            className="text-lg tracking-widest w-1/6 py-2 px-10 font-bold text-white bg-skyGreen cursor-pointer"
            onClick={handleGoBackOnClick}
         >
            Back Home
         </button>
      </div>
   )
}

export default SuccessMsgModal

/**
 * TODO
 * should refactor this component to pop up as a modal
 */
