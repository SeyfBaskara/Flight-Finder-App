import { createContext, ReactNode, useContext, useState } from 'react'
import * as API from '../api/index'

type SearchFlightProviderProps = {
   children: ReactNode
}

type SearchFlightContext = {
   getFlights: (userInput: UserInputState) => void
}

const SearchFlightContext = createContext({} as SearchFlightContext)

const SearchFlightProvider = ({ children }: SearchFlightProviderProps) => {
   const [flights, setFlights] = useState()

   const getFlights = async (userInput: UserInputState) => {
      try {
         const { data } = await API.searchTrips(userInput)
         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         <SearchFlightContext.Provider
            value={{
               getFlights,
            }}
         >
            {children}
         </SearchFlightContext.Provider>
      </>
   )
}

export const useSearchFlightContext = () => useContext(SearchFlightContext)
export default SearchFlightProvider
