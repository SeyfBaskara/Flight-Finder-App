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
   const { departure, arrival, adult, child, typeOfTrip } = req.body
   const departureDest = departure.toLowerCase()
   const arrivalDest = arrival.toLowerCase()

   try {
      if (!departure || !arrival) {
         throw new Error('Error accurs on request body, please check input values')
      }

      const oneWayTrip = await getOneWayTrip(departureDest, arrivalDest, adult, child)
      const returnTrip = await getReturnTrip(departureDest, arrivalDest, adult, child)

      setTimeout(() => {
         if (typeOfTrip.toLowerCase() === 'oneway') {
            res.json({ data: { oneWayTrip, returnTrip: [] }, message: 'success' })
         } else {
            res.json({ data: { oneWayTrip, returnTrip }, message: 'success' })
         }
      }, 3000)
   } catch (error) {
      res.status(400).json({ message: error.message })
   }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
