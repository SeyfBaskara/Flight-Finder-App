import { createContext, ReactNode, useContext, useState, Dispatch, SetStateAction } from 'react'
import * as API from '../api/index'

type SearchFlightProviderProps = {
   children: ReactNode
}

type SearchFlightContext = {
   getFlights: (userInput: IUserInputState) => void
   getDestinationHours: (flight: IFlightItinerarie) => IGetDestHourFunc
   getFlightPrice: (flight: IFlightItinerarie) => IGetFlightPriceFunc
   setBookFlight: (bookFlight: IFlightData) => void
   setApprovedFlight: (hasApproved: boolean, approvedFlight: IApprovedBookFlight) => void
   setHasApprovedFlight: Dispatch<SetStateAction<boolean>>
   flights: IFlightData
   isLoading: boolean
   bookFlightCart: IFlightData | {}
   hasApprovedFlight: boolean
}

interface IGetDestHourFunc {
   depatureAt: string
   arriveAt: string
   totalHour: string
}
interface IGetFlightPriceFunc {
   currency: string
   adult: number
   child: number
}
interface IApprovedBookFlight {
   flight_id: string
   passengers: {
      firstName: string
      lastName: string
      email: string
      phone: number
   }
}
const initialState = {
   oneWayTrip: {
      arrivalDestination: '',
      depatureDestination: '',
      flight_id: '',
      itineraries: [
         {
            arriveAt: '',
            avaliableSeats: 0,
            depatureAt: '',
            prices: [
               {
                  adult: 0,
                  child: 0,
                  currency: '',
               },
            ],
         },
      ],
      passengers: {
         adult: 1,
         child: 0,
      },
   },
   returnTrip: {
      arrivalDestination: '',
      depatureDestination: '',
      flight_id: '',
      itineraries: [
         {
            arriveAt: '',
            avaliableSeats: 0,
            depatureAt: '',
            prices: [
               {
                  adult: 0,
                  child: 0,
                  currency: '',
               },
            ],
         },
      ],
      passengers: {
         adult: 1,
         child: 0,
      },
   },
   message: '',
}
const approvedBookFlightState = {
   flight_id: '',
   passengers: {
      firstName: '',
      lastName: '',
      email: '',
      phone: 0,
   },
}

const SearchFlightContext = createContext({} as SearchFlightContext)

const SearchFlightProvider = ({ children }: SearchFlightProviderProps) => {
   const [flights, setFlights] = useState<IFlightData>(initialState)
   const [bookFlightCart, setBookFlightCart] = useState<IFlightData | {}>({})
   const [isLoading, setIsLoading] = useState<boolean>(false)

   const [approvedBookFlight, setApprovedBookFlight] = useState<IApprovedBookFlight>(approvedBookFlightState)
   const [hasApprovedFlight, setHasApprovedFlight] = useState<boolean>(false)

   const getFlights = async (userInput: IUserInputState) => {
      setIsLoading(true)
      try {
         const { data } = await API.searchTrips(userInput)
         if (data.message === 'success') {
            setIsLoading(false)
            setFlights(data)
         } else {
            setIsLoading(false)
            setFlights({ ...flights, message: data.message })
         }
      } catch (error) {
         console.log(error)
      }
   }
   const getDestinationHours = (flight: IFlightItinerarie): IGetDestHourFunc => {
      const depatureAt = flight.depatureAt.match(/[0-9]+:[0-9]+/i)![0]
      const arriveAt = flight.arriveAt.match(/[0-9]+:[0-9]+/i)![0]
      const [DepAtHour, depAtTime] = depatureAt.split(':').map((item) => parseInt(item))
      const [arrAtHour, arrAtTime] = arriveAt.split(':').map((item) => parseInt(item))
      const totalHour = `${arrAtHour - DepAtHour}h:${
         depAtTime > arrAtTime
            ? depAtTime
            : arrAtTime - depAtTime < 10
            ? '0' + (arrAtTime - depAtTime)
            : arrAtTime - depAtTime
      }`
      return {
         depatureAt,
         arriveAt,
         totalHour,
      }
   }
   const getFlightPrice = (flight: IFlightItinerarie): IGetFlightPriceFunc => {
      const { currency, adult, child } = flight.prices[0]
      return {
         currency,
         adult,
         child,
      }
   }
   const setBookFlight = (bookFlight: IFlightData) => {
      setBookFlightCart(bookFlight)
   }
   const setApprovedFlight = (hasApproved: boolean, flight: IApprovedBookFlight) => {
      setHasApprovedFlight(hasApproved)
      setApprovedBookFlight(flight)
   }

   return (
      <>
         <SearchFlightContext.Provider
            value={{
               getFlights,
               getDestinationHours,
               isLoading,
               flights,
               getFlightPrice,
               bookFlightCart,
               setBookFlight,
               setApprovedFlight,
               hasApprovedFlight,
               setHasApprovedFlight,
            }}
         >
            {children}
         </SearchFlightContext.Provider>
      </>
   )
}

export const useSearchFlightContext = () => useContext(SearchFlightContext)
export default SearchFlightProvider
