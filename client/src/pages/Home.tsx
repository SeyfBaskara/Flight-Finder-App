import React from 'react'
import Form from '../components/searchForm/Form'
import Flights from '../components/FligthsList/Flights'

const Home: React.FC = () => {
   return (
      <>
         <Form />
         <Flights />
      </>
   )
}

export default Home
