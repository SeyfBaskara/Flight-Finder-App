import axios from 'axios'

const url = 'http://localhost:5000'

interface IProps {
   departure: string
   arrival: string
   adult: number
   child: number
   typeOfTrip: string
}

export const searchTrips = (flight: IProps) => axios.post(`${url}/searchtrip`, flight)
