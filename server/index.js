import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import { getOneWayTrip, getReturnTrip } from './utils/getFlightTrips.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
   res.send('health check')
})

app.post('/api/searchtrip', async (req, res) => {
   const { departure, arrival, adult, child, typeOfTrip, departureDate, returnDate } = req.body
   const departureDest = departure.toLowerCase()
   const arrivalDest = arrival.toLowerCase()

   try {
      if (!departure || !arrival) {
         throw new Error('Error accurs on request body, please check input values')
      }

      const oneWayTrip = await getOneWayTrip(departureDest, arrivalDest, adult, child, departureDate)
      const returnTrip = await getReturnTrip(departureDest, arrivalDest, adult, child, returnDate)

      setTimeout(() => {
         if (oneWayTrip === undefined || returnTrip === undefined) {
            res.json({ message: 'No flight avaiable at these destination' })
            return
         }

         if (typeOfTrip.toLowerCase() === 'oneway') {
            res.json({ oneWayTrip, returnTrip: [], message: 'success' })
         } else {
            res.json({ oneWayTrip, returnTrip, message: 'success' })
         }
      }, 3000)
   } catch (error) {
      res.status(400).json({ message: error.message })
   }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
