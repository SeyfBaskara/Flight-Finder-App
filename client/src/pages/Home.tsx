import React from 'react'
import Form from '../components/searchForm/Form'
import Flights from '../components/FligthsList/Flights'

const Home: React.FC = () => {
   return (
      <div>
         <Form />
         <Flights />
      </div>
   )
}

export default Home
